// for importing expressjs into our application
const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const globalErrorMiddleware = require('./middlewares/appErrorHandler')
const routeLoggerMiddleware = require('./middlewares/routeLogger')


// declaring an instance or creating an application instance
const app = express()


// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))
app.use(cookieParser())

app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)



// Bootstrap models
let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) require(modelsPath + '/' + file )
}) // end Bottstrap models 



// Bootstrap Route
let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log('include the following file');
        console.log(routesPath + '/' + file);
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
}); // end bootstrap route

// calling global 404 handler after route
app.use(globalErrorMiddleware.globalNotFoundHandler)
// end of global error handler


// listening the server
app.listen(appConfig.port, () => {
    console.log('Example app listening on port 3000!')
    // creating the mongo db connection here
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true });
})

// handling mongoose connection error 
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err);
})

// handling mongoose success connection event 
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log(`database error`);
        console.log(err);
    } else {
        console.log(`database connection open success`);
    }
}); // end mongoose connection open handler