/*
  javascript file to demonstrate:
  - Use of strict mode
  - Use of 'this' keyword
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

// Using this keyword to fetch information of an object
// This example demonstrates use of regular method which has access to the object calling this keyword i.e. student
const student = {
    firstName: 'Sahil',
    birthYear: 1990,
    getAge: function () {
        console.log(`value of 'this' keyword: `, this)
    },
}

student.getAge()

var firstName = 'Aditya' // Using var will make this value available to arrow function declared below.
// const firstName = 'Chris' // This will not be available to arrow function.

// Using this keyword to fetch information of an object using Arrow functions
// This example demonstrates use of regular method which does not have access to the object calling this keyword i.e. student
const student2 = {
    firstName: 'Sahil',
    birthYear: 1990,
    getAge: () => {
        // Below line will print parent object i.e. Window or a variable declared in global context
        console.log(
            `value of 'this' keyword available to Arrow function: `,
            this.firstName
        )
    },
}

student2.getAge()
console.log('end of file')
