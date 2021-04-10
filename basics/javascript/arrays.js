/*
  javascript file to demonstrate:
  - Use of strict mode
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

// Declaring and initializing an array
const messages = ['Hello World!', 'Hello User!', 'Hello Admin!']
const messages2 = new Array('Hello World!', 'Hello User!', 'Hello Admin!')

// Accessing Array elements
console.log(messages2[0])

// Getting number of elements in an Array
console.log(messages.length)

// Array methods.
// Add element to the end of the array
messages.push('Pushing another message to Array')
console.log(messages)

// Add element to the beginning of the array
messages.unshift('New First method')
console.log(messages)

// Remove element from the end
messages.pop() // You can also store the popped element to a variable
console.log(messages)

// Remove first element from array
messages.shift()
console.log(messages)

// Get index/position of an element in array
console.log(messages.indexOf('Hello World!')) // If the element is found, its index will be returned
console.log(messages.indexOf('Hello Missing!')) // If the element is not found, -1 will be returned

// Check if an element is present in an array
console.log(messages.includes('Hello World!')) // Returns true if present else false

// Destructuring Array
// To read array and assign its values to different variables in same line
const testArray = [2, 3, 4]
const [a, b, c] = testArray
console.log(a, b, c)

// Swapping values of two variables without temp variable
let [first, second] = testArray
console.log(`Before swap: `, first, second)

// Format on save causing issues but this is how it should be done
// [first, second] = [second, first]
[first, second] = [second, first]
console.log('After swap: ', first, second)

// Spread operator to create a new array using an existing array
const newTestArray = [1, ...testArray]
console.log(newTestArray)

// We can use spread operator while creating array and while passing in values to functions
// i.e. only use it when values separated by comma are required.

// Rest pattern
// it is used to pack an array instead of unpacking an array(spread operator)
// Example:
const [x, y, z, ...more] = [1, 2, 3, 4, 5, 6, 7]
// This now will assign values to variables a, b, c and more (array)
// more is of type array
console.log(x, y, z, more)
