const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());
// app.post();
// app.put();
// app.delete();

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'}
]

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req, res) => {
    // res.send(JSON.stringify([1,2,3,4]));
    res.send(courses);
});

app.get('/api/courses/:id',(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given Id was not found")

    res.send(course);
});


app.post('/api/courses',(req, res) => {

  
    const {error} = validateCourse(req.body)

    if (error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return  res.status(404).send("The course with given Id was not found")

    const {error} = validateCourse(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;

    res.send(course);
});


app.delete('/api/courses/:id',(req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send("The course with given Id was not found")

    const index = courses.indexOf(courses);
    courses.splice(index,1);

    res.send(course);
});


// PORT
const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`Listening ${port}`);
})


function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course,schema);
}