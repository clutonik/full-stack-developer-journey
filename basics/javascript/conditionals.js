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
