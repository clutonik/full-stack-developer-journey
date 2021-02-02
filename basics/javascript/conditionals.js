/*
  javascript file to demonstrate:
  - Syntax to declare a constant
  - Using Comments
  - Using console.log to log data/values
  - String Concatenation
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Constant and variable Declaration
const bodyTemperature = 37; // Having semi-colon at the end is important for every statement in javascript
const bodyTemperatureForFever = 38;

// If condition
if (bodyTemperature > bodyTemperatureForFever) {
  console.log(
    `You can not enter the building as your body temperature is above ${bodyTemperatureForFever}`
  );
} else {
  console.log(
    `Your body temperature ${bodyTemperature} is within allowed limits. You can enter the building.`
  );
}

// If condition using === and == operators
if (bodyTemperature === "37") console.log("This will not be logged"); // This console.log will not run because === does not do type coercion and will return false
if (bodyTemperature == "37") console.log("This will be logged"); // This console.log will run because == does type coercion and will return false

// If-else-if statement
if (bodyTemperature === "37") {
  console.log("First Condition");
} else if (bodyTemperature < bodyTemperatureForFever) {
  console.log("else-if condition log");
} else {
  console.log("The else part");
}

// Conditional statements using Logical Operators
// Logical OR ||
// Logical AND &&
// Logical NOT !
let hasSymptoms = true;

// Logical OR
if (hasSymptoms || bodyTemperature >= bodyTemperatureForFever) {
  console.log(
    `You can not enter the building as your body temperature is above ${bodyTemperatureForFever}`
  );
}

// Logical NOT
if (!bodyTemperature < bodyTemperatureForFever) {
  console.log("You can enter the building");
}

// Switch Statement does strict comparison similar to '==='
switch (bodyTemperature) {
  case 37:
    console.log(`Body temperature is ${bodyTemperature} and is fine.`);
    break;
  case 38:
    console.log(`Body temperature is not ok and is ${bodyTemperature}`);
    break;
  default:
    console.log("Not a valid value for comparison");
    break; // This break is optional
}

console.log(`End of file`);
