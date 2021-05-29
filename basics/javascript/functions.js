/*
  javascript file to demonstrate:
  - Use of strict mode
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

// Function Declaration
function logMessage() {
    console.log('This is the log message from function logMessage')
}

// Function invocation
logMessage()

// Parameterized functions
function logName(name) {
    console.log(`Welcome ${name}`)
}

logName('Clutonik')

// Function with return
function createLogString(message) {
    return `Log string from createLogString: ${message}`
}

// Storing returned value in another variable
const logString = createLogString('Hello World!')
console.log(logString)

// Arrow Functions
// Arrow function without parameters
const logMessage1 = () => 'Hello world from arrow func 1'
console.log(logMessage1())

// Passing variable to arrow function
const logMessage2 = (messageToLog) => messageToLog // Implicit Return included in one liner arrow functions
console.log(logMessage2('Hello World from arrow func 2'))

// Arrow function with explicit return
const logMessage3 = (messageToLog) => {
    // Do some work here if needed.
    return messageToLog
}

console.log(logMessage3('Hello World from arrow func 3'))

// Default parameters
function defaultFunction(arg1, arg2, arg3 = 'default-value') {
    console.log(arg1, arg2, arg3)
}

defaultFunction('value1','value2')

// Higher Order Functions
/* 
 * Higher order functions are the function which either accepts another function
 * as argument or returns a functions
 * The function being passed as arg is called callback function
*/

const firstWordUpper = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const higherLoggerfunc = function(str, fn) {
    console.log(`Original String: ${str}`)
    // Calling another function within this higher order func
    console.log(`Modified string: ${fn(str)}`)
    console.log(`Modified by: ${fn.name}`)
}

higherLoggerfunc('Hello World!', firstWordUpper)

// Functions returning another function
const logger = function(logLevel) {
    return function (message) {
        console.log(`${logLevel} - ${message}`)
    }
}

// Using the function which returns function
const infoLogger = logger('INFO')

infoLogger('logging this message from a returned function')

// call method
// we can use call() method available to all functions to pass in the object they should work on
const callObject1 = {
    name: 'sahil',
    occupation: 'software engineer',
    introduce(companyName, startYear){
        console.log(`${this.name} worked as ${this.occupation} at ${companyName} since ${startYear}`)
    }
}
const callObject2 = {
    name: 'Aditya',
    occupation: 'Tax Consultant'
}

// Making introduce function available to all objects
const occupation = callObject1.introduce;

// So, now we use call method to invoke occupation function for different objects.
occupation.call(callObject1, 'RBC', '2019')
occupation.call(callObject2, 'EY', '2020')

// Apply Method
// Apply method does not accept args after this object. It instead accepts an array
const sahil = ['RBC', '2019']
const aditya = ['EY', '2020']

occupation.apply(callObject1, sahil)
occupation.apply(callObject2, aditya)

// Note: Apply method is an old way of passing in data to function.
// New javascript syntax allows use of ... operator to pass in array data to call() function
// Example:
occupation.call(callObject2, ...aditya)

// Bind Method
// This method does not immediately call the function, it instead creates a new function 
// which we can assign to a new variable and we can use that variable as function instead
// of calling originalFunction.call() method.
// Example:
const adityaJob = occupation.bind(callObject2)
adityaJob('EY', '2019') // Changed year just to differentiate the output

// Bind Method (contd...)
// We can also bind a function to another object for a specific value. 
// Example:
const adityaJobEY = occupation.bind(callObject2, 'EY')
// Now we have adityaJobEY function which is bind to his work at EY.
// and we can pass in the startYear
// This concept is also known as 'partial application' which means
// initializing the original function partially.
adityaJobEY('2018') // Just to see different output in console

// We can use Bind method for regular functions as well
// Example:
const applyTax = (taxRate, billAmount) => billAmount + billAmount * taxRate;
// So we can use bind method here to create a new method for ON HST
// One thing to note here is to have the var to initialize as first arg in original func
const applyHST = applyTax.bind(null, 0.13);

console.log(`Total Bill with 13% HST: \$${applyHST(100)}`)

// Immediately invoked function expressions (IIFE)
(function () {
    console.log('this will be invoked only once.')
})()

// Closures
// A function has access to the variable environment (VE) of the execution context
// in which it was created. So, Closure is the VE attached to the function,
// exactly it was at the time and place the function was created.
