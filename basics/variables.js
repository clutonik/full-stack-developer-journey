/*
  javascript file to demonstrate:
  - Syntax to declare a variable
  - Using Comments
  - Using console.log to log data/values
  - Basic Data types
  - Storing values of a different type in an existing variable
  - String Concatenation
  - Use of `typeof` operator to check the data type of a variable
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Variable Declaration
let testVariable = "Hello World!"; // Having semi-colon at the end is important for every statement in javascript

// Printing variable value in console log (Open Dev tools in your browser to check cosole logs)
console.log(testVariable);

// Basic data types in javascript
// We can change data types of an existing variable any time we want.
let freeVariable = "Hello coder!!"; // String Type

// logging Data type of the variables
console.log("Type of freeVariable: ".concat(typeof freeVariable));

// Changing Types now
freeVariable = 32; // Integer Type
console.log("Type of freeVariable: ".concat(typeof freeVariable));
freeVariable = true; // Boolean Type
console.log("Type of freeVariable: ".concat(typeof freeVariable));

// You can also declare a variable without initializing type which is known as undefined type
let undefinedVariable;
console.log("Type of undefinedVariable: ".concat(typeof undefinedVariable));

// You can declare and initialize a variable with null value (This returns object as it is an old bug which has been left for legacy support)
let nullVariable = null;
console.log("Type of nullVariable: ".concat(typeof nullVariable));
