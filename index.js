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
    res.send([1,2,3,4,9]);
});

app.get('/api/courses/:id',(req, res) => {
    res.send({userId:req.params.id});
});


app.post('/api/courses',(req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body,schema);

    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

// PORT
const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`Listening ${port}`);
})