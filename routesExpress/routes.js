const express = require('express');
const route = express.Router(); 
const homeControl = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

function myMiddleware (req, res, next){

    console.log();
    console.log('Middleware!');
    console.log();
    next();
};

// Literally the express's router.
route.get('/', myMiddleware, homeControl.homePage, function(req, res, next){
    console.log('Here');
}); 
route.post('/', homeControl.secondPage);

// Contact routes

route.get('/contact', contactController.homePage);


module.exports = route;