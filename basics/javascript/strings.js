/*
  javascript file to demonstrate:
  - Syntax to declare a constant
  - Using Comments
  - Using console.log to log data/values
  - String Concatenation
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Constant and variable Declaration
const birthYear = 1990; // Having semi-colon at the end is important for every statement in javascript
let firstString = "first";
let secondString = "second";

// String concatenation (Open Dev tools in your browser to check console logs)
// old way:
const thirdString =
  "This is how we can concatenate " + firstString + " and " + secondString;

console.log(thirdString);

// String concatenation using Template Literals
const fourthString = `This is how we can concatenate ${firstString} and ${secondString} using template literals`;
console.log(fourthString);

// New line (Old-way)
console.log("Multiline \n\
using \n\
old way");

// New line (New-way)
console.log(`Multiline
using
new way`);
