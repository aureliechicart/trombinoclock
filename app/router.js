// importing express
const express = require('express');

// importing our controllers
const mainController = require('./controllers/mainController');
const promoController = require('./controllers/promoController');
const errorController = require('./controllers/errorController');
const studentController = require('./controllers/studentController');
const adminController = require('./controllers/adminController');
const authController = require('./controllers/authController');
const searchController = require('./controllers/searchController');

// instantiating a router
const router = express.Router();

// plugging our routes
router.get('/', mainController.homePage );
router.get('/promos', promoController.promoList );
router.get('/promo/:id', promoController.promoDetails );
router.get('/student/:id', studentController.studentDetails );
router.get('/admin/addStudent', adminController.getAddStudentForm );
router.post('/admin/addStudent', adminController.postAddStudentForm );

// setting up mock authentication
router.get('/login', authController.getLoginForm );
router.post('/login', authController.postLoginForm );

router.get('/search', searchController.searchAllByName );

// the 404 route
router.use( errorController.notFound );

module.exports = router;