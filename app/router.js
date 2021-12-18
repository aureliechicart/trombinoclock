// importing express
const express = require('express');

// importing our controllers
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const errorController = require('./controllers/errorController');

// instantiating a router
const router = express.Router();

// plugging our routes
router.get('/', mainController.homePage );
router.get('/promos', promoController.promoList );

// the 404 route
router.use( errorController.notFound );

module.exports = router;