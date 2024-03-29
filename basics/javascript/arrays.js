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
// [first, second] = [second, first]
console.log(`After swap: `, first, second)

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

// Create shallow copy of an array using slice() method
const sliceArray = [2,3,4,54,55]
console.log(`Sliced array: ${sliceArray.slice(2,4)}`)

// Using splice() method to remove elements from an array
// splice() method creates a shallow copy just like slice() but it modifies the original array
// by deleting the elements.
// second argument to splice() method is the number of values we want to delete
// Example:
const spliceArray = [2,3,4,54,55]
console.log(`Spliced array: ${spliceArray.splice(2,2)}`)
console.log(`Original Array after splice method: ${spliceArray}`)

// Using Reverse() method on array
// Example:
const reverseArray = [2,3,4,54,55]
console.log(`Original array: ${reverseArray}`)
console.log(`Reversed array: ${reverseArray.reverse()}`)

// Concatenate two arrays
// concat() method does not modify original array
// Example
const concatArray1 = [1,2]
const concatArray2 = [3,4]
console.log(`Concatenated array: ${concatArray1.concat(concatArray2)}`)

// Join array elements into one string
// join() method modifies original array
const joinArray = [1,2,3,4]
console.log(`Array elements joined using a '-': ${joinArray.join('-')}`)

// forEach() high-order function to loop over array elements
// this method accepts a callback function as argument.
// forEach() method passes extra information to the callback function
// apart from just the element. This extra information includes 
// element index and original array.
// Continue and break statements do not work with forEach() method.
const loopedArray = [1,2,3,4]

loopedArray.forEach(function(element) { // naming the element being looped over
    console.log(`Looking at item: ${element}`)
})

// Accessing index and array
loopedArray.forEach(function(element, i, arr) { // the order of these args is important
    console.log(`Looking at item: ${element} at ${i} of ${arr}`)
})

// Using map() method to create a new array
const mapArray = [1,2,3,4,5]

const doubledArray = mapArray.map(function(element){
    return element * 2
})

// Using map() method with arrow function
const doubledArrayUsingArrow = mapArray.map(element => element * 2)

console.log(`Original array before using map method: ${mapArray}`)
console.log(`Doubled array using map method: ${doubledArray}`)
console.log(`Doubled array using array function in map method: ${doubledArrayUsingArrow}`)
