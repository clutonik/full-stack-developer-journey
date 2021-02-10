/*
  javascript file to demonstrate:
  - Use of strict mode
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
"use strict";

// Declaring and initializing an array
const messages = ["Hello World!", "Hello User!", "Hello Admin!"];
const messages2 = new Array("Hello World!", "Hello User!", "Hello Admin!");

// Accessing Array elements
console.log(messages2[0]);

// Getting number of elements in an Array
console.log(messages.length);

// Array methods.
// Add element to the end of the array
messages.push("Pushing another message to Array");
console.log(messages);

// Add element to the beginning of the array
messages.unshift("New First method");
console.log(messages);

// Remove element from the end
messages.pop(); // You can also store the popped element to a variable
console.log(messages);

// Remove first element from array
messages.shift();
console.log(messages);

// Get index/position of an element in array
console.log(messages.indexOf("Hello World!")); // If the element is found, its index will be returned
console.log(messages.indexOf("Hello Missing!")); // If the element is not found, -1 will be returned

// Check if an element is present in an array
console.log(messages.includes("Hello World!")); // Returns true if present else false
