const express = require('express');
const Joi = require('joi');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', "GET",'DELETE');
        return res.status(200).json({});
    }
    next();
});


//Routes which handle requests
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);

});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })

});
module.exports = app;











///Old Code with direct calls
// const courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'}
// ]

// app.get('/',(req, res) => {
//     res.send('Hello World');
// });

// app.get('/api/courses',(req, res) => {
//     // res.send(JSON.stringify([1,2,3,4]));
//     res.send(courses);
// });

// app.get('/api/courses/:id',(req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send("The course with given Id was not found")

//     res.send(course);
// });


// app.post('/api/courses',(req, res) => {

  
//     const {error} = validateCourse(req.body)

//     if (error){
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// });

// app.put('/api/courses/:id',(req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if (!course) return  res.status(404).send("The course with given Id was not found")

//     const {error} = validateCourse(req.body);
//     if (error){
//         return res.status(400).send(error.details[0].message);
//     }

//     course.name = req.body.name;

//     res.send(course);
// });


// app.delete('/api/courses/:id',(req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id))
//     if (!course) return res.status(404).send("The course with given Id was not found")

//     const index = courses.indexOf(courses);
//     courses.splice(index,1);

//     res.send(course);
// });



// function validateCourse(course){
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course,schema);
// }