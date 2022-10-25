const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/course.json');

app.get('/', (req, res) => {
    res.send('welcome to E-study server')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(p => p.id == id);
    res.send(course)
})

app.listen(port, () => {
    console.log("server is running", port);
})