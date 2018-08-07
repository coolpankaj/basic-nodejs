const express = require('express')

let helloWorldFunction = (req, res) => res.send('Hello World!')


let printExample  = (req, res) => res.send('print Example')


module.exports = {
    helloWorld: helloWorldFunction,
    printExample: printExample
}