/*
  javascript file to demonstrate:
  - Use of strict mode
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

// Object Definition
const message1 = {
    value: 'Hello World!',
    messageType: 'log',
    // Object Method definition which has to be mapped with a key
    logMessage: function (message) {
        return `${message} from object function`
    },
    // Object Method to access object keys/attributes
    logObjectKey: function () {
        return `${this.value} was read from an object attribute` // this points to the object calling this function
    },
    // Object Method to initialize an object property
    SetDefaultLogMessage: function (message) {
        this.defaultLogMessage = `${message}`
        return this.defaultLogMessage
    },
    nestedKey: {
        innerKey1: 'value1',
        innerKey2: 'value2',
    },
}

// Accessing Object keys
// using . dot notation
console.log(message1.value)

// using [] bracket notation
console.log(message1['messageType'])

// Writing conditional statements to check if a key exists in an object
if (message1['messageType1']) {
    console.log('Value for key messageType: ', message1['messageType'])
} else if (!message1['missingKey']) {
    console.log('Key named missingKey not found.')
}

// Adding keys to an object
message1.file = '/tmp/object.log'
console.log(message1)

// Using Object Method
console.log(message1.logMessage('Console message'))
console.log(message1.logObjectKey())
console.log(message1.SetDefaultLogMessage('Default Message'))
console.log(message1.defaultLogMessage) // Accessing property directly after it is defined

// Destructuring objects (dictionaries)
// This will be useful while working with APIs
let { value, messageType } = message1
console.log(value, messageType)

// Destructuring objects for keys which do not exist
// You can override object key names using existingKey: renamedKey syntax as highlighted below
let { value: namedValue, sentBy = 'anonymous' } = message1
console.log(namedValue + ' sent by: ' + sentBy)

// In the example above, I created a new var called namedValue as there was already
// a variable called 'value'
// if we want to mutate existing variables i.e. change their values, we can use this:
// ({ value, messageType } = message1)

// Destructuring nested objects
let {
    nestedKey: { innerKey1, innerKey2 },
} = message1
console.log(innerKey1, innerKey2)
