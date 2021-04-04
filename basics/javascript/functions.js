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
