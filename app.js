const express = require('express');
const http = require('http');


const app = express(); // starting our express app
app.set('view engine', 'pug'); // setting to use pug
app.use('/static', express.static('public')); // setting the public folder at the address /static

// require all javascript routes
const homeRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectsRoute = require('./routes/projects');

// use routes in pair with their javascript
app.use(homeRoute);
app.use('/about', aboutRoute);
app.use('/projects', projectsRoute);

// create a new error message for when the user tries to enter an unknown page
app.use((req, res, next) => {
    const err = new Error('Page not found!');
    err.status = 404;
    next(err);
});

// renders the error page
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.render('error', err);
    console.log("Oops! The page you are looking for cannot be found.");
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});