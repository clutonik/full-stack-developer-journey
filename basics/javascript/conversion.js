/*
  javascript file to demonstrate:
  - Syntax to declare a constant
  - Using Comments
  - Using console.log to log data/values
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Constant and variable Declaration
const bodyTemperature = "37"; // Having semi-colon at the end is important for every statement in javascript

// Converting string to a number
console.log(
  `Converting ${bodyTemperature} which is of type ${typeof bodyTemperature} to number i.e. ${Number(
    bodyTemperature
  )}`
); // Number(var) will return 'NaN' i.e. Not a Number if this conversion is tried on a string variable which can not be converted to a number e.g. "hello"

// Converting number to a string
let temperature = 37;
console.log(
  `Converting ${temperature} which is of type ${typeof temperature} to string i.e. ${String(
    temperature
  )}`
);

// Type coercion (Automatic type conversion done by javascript)
console.log("I am " + 30 + " years old"); // + operator does type coercion to convert number to string
console.log("32" - "12" - 6); // - operator does type coercion the other way around i.e. to convert string to numbers
console.log("32" > "20");

// Javascript also has concept of Truthy and Falsy values which will always return False when type conversion or coercion to Boolean is performed on them
// Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // This will return false
console.log(Boolean(undefined)); // This will return false
console.log(Boolean("")); // This will return false
console.log(Boolean(null)); // This will return false
console.log(Boolean("Hello")); // This will return true
