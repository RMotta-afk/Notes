const express = require('express');
const route = express.Router(); 
const homeControl = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');


// Literally the express's router.
route.get('/', homeControl.homePage); 
route.post('/', homeControl.postPage);

// Contact routes

route.get('/contact', contactController.homePage);


module.exports = route;