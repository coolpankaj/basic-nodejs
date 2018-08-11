// example of middleware function
let exampleMiddleware = (req, res, next ) => {
   
    req.user =  { 'firstName': 'pannkaj', 'lastName': 'singh' }
    next();

}

module.exports = {
    exampleMiddleware: exampleMiddleware
}