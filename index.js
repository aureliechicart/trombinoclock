// importing express module
const express = require('express');
// importing morgan (logger which describes each request received byt the server)
const morgan = require('morgan');

// importing our router
const router = require('./app/router');

// instanciating our application
const app = express();
// plugging the logger in "dev" mode
app.use( morgan('dev') );

// adding express-session to add a 'session' parameter to all requests
const session = require('express-session');
app.use( session({
    secret: "moi j'aime bien les sessions comme ça...",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 1000*60*60 //  => one hour
    }
}));

// adding a middleware to process POST info
app.use( express.urlencoded({extended: true}) );

// creating a variable to store the port number
const PORT = 3210;

// setting the template engine and the EJS views folder
app.set('view engine', 'ejs');
app.set('views', './app/views');

// indicating the public folder containing our static files
app.use(express.static('public'));

// plugging the router
app.use(router);

// setting the app for listening on the defined port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});