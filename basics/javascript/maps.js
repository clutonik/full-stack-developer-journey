/*
  javascript file to demonstrate:
  - Use of strict mode
  - Use of 'this' keyword
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

// Creating a new map
const person = new Map()

// Add a key pair to map
person.set('name', 'Sahil')
console.log(person)

// set method returns the updated map, so we can use it directly as well
console.log(person.set('country', 'Canada'))

// Adding multiple keys
person.set('lastName', 'Chawla').set('city', 'Toronto')
console.log(person)

// Get value of a key
console.log(person.get('name'))

// check if a map has certain key
console.log(person.has('name'))

// Delete a key
person.delete('city')
console.log(person)

// Size of map
console.log(person.size)

// Clear all keys from map
person.clear()
console.log(person)

// More declarative way of creating maps (Array of Arrays)
const student = new Map([
  ['name', 'Sahil'],
  ['country', 'Canada'],
  ['Age', 30]])

console.log(student);
