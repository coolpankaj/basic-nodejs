
let errorHandler = (err, req, res, next) => {
    console.log('application arror handler called')
    console.log(err)
    res.send('Some error occurred at global level')
} 

let notFoundHandler = (req, res, next) => {
    console.log('Global not found handler called')
    res.status(404).send('Route not Found in the application')
} // end of not found handler

module.exports = {
        globalErrorHandler: errorHandler,
        globalNotFoundHandler: notFoundHandler
}