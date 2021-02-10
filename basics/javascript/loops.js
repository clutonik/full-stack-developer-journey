/*
  javascript file to demonstrate:
  - Use of strict mode
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
"use strict";

// Object Definition
const message1 = {
  value: "Hello World!",
  messageType: "log",
  // Object Method definition which has to be mapped with a key
  logMessage: function (message) {
    return `${message} from object function`;
  },
  // Object Method to access object keys/attributes
  logObjectKey: function () {
    return `${this.value} was read from an object attribute`; // this points to the object calling this function
  },
  // Object Method to initialize an object property
  SetDefaultLogMessage: function (message) {
    this.defaultLogMessage = `${message}`;
    return this.defaultLogMessage;
  },
};

// An Array to loop over
const messageArray = ["Hello", "Hello World!", "Hello Universe!!"];

for (let i = 0; i < messageArray.length; i++) {
  console.log(messageArray[i]);
}

// Break statement
for (let i = 0; i < messageArray.length; i++) {
  if (messageArray[i] === "Hello World!") {
    console.log(`${messageArray[i]} found.`);
    break;
  }
}

// Continue statement
for (let i = 0; i < messageArray.length; i++) {
  if (typeof messageArray[i] === "string") {
    console.log(`${messageArray[i]} has string type. The loop will continue.`);
    continue;
  }
}

// Nested Loops
for (let i = 0; i < messageArray.length; i++) {
  console.log(`Array element: ${messageArray[i]}`);
  for (let j = 0; j <= i; j++) {
    console.log(
      `Number of letters in ${messageArray[i]}: ${messageArray[i].length}`
    );
  }
}

// While loops
let i = 0;
while (i < messageArray.length) {
  console.log(`console message from while loop. ${messageArray[i]}`);
  i++;
}
