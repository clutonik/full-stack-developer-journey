/*
  javascript file to demonstrate:
  - Syntax to declare a constant
  - Using Comments
  - Using console.log to log data/values
  - Basic Data types
  - Storing values of a different type in an existing variable
  - String Concatenation
  - Use of `typeof` operator to check the data type of a variable
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Constant Declaration
const birthYear = 1990 // Having semi-colon at the end is important for every statement in javascript

// Arithmatic Operators (Open Dev tools in your browser to check cosole logs)
console.log(birthYear - 1980, 'years') // Subtract/Minus
console.log(2020 - birthYear, 'years') // Sum/Addition
console.log(birthYear / 2, 'years') // Divide
console.log(birthYear * 2, 'years') // Multiplication
console.log(2 ** 4, 'years') // 2 to the power of 4
console.log('Hello' + ' ' + 'World!') // Sum Operator to concatenate strings

// Assignment Operators
let currentAge = 2020 - birthYear
console.log('Current Age using Assignment operator: ', currentAge)
currentAge += 1
currentAge++ // Same as currentAge + 1
currentAge-- // Same as currentAge - 1
console.log('Updated Age now: ', currentAge)

// Comparison Operators
console.log(birthYear > 1989) // Returns boolean, true in this case
console.log(birthYear > 1991) // Returns boolean, false in this case
console.log(birthYear >= 1990) // Returns boolean, true in this case

// Refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence for operator precedence
// Key point to note is all numeric operators have precedence over comparison operators
// Values are calculated from right-to-left
let x, y, z
x = y = z = 10 + 5 + 20
console.log(x, y, z)

// Using round braces to control precedence
// Calculating Average of 2 numbers using / operator
let result = 10 + 18 / 2 // This will not give us the right result as the operators work from right to left by default
console.log('Incorrect average result: ', result)
result = (10 + 18) / 2 // This will give us the right result
console.log('Correct average result: ', result)

// Ternary Operator (The conditional operator)
const haveLicense = false
haveLicense === true
    ? console.log('You can drive')
    : console.log('You can not drive')

// Storing values to another variable using ternary operator
const canDrive = haveLicense === true ? true : false
console.log(canDrive)

// Using ternary operator in Template Literal
console.log(`Can I Drive? Answer: ${haveLicense === true ? true : false}`)

// Short circuiting using && and ||
// Using ||
// || returns the first truthy value it encounters
result = 0 || 'Sahil' // This returns 'Sahil' as it the only truthy value in expression
console.log(result)
// Using &&
// && returns the last truthy value it encounters or first falsy value it encounters
result = 0 && 'Sahil' // This returns 0 as it is the first falsy value
console.log(result)
result = 4 && 'Sahil' // This returns Sahil as it the last truthy value in expression
console.log(result)

// So we can use circuit breaking to avoid if conditions
// Example:
// Code with if condition
const obj1 = {
    name: '',
}
if (obj1.name) {
    console.log(obj1.name)
}
// This can be written by using circuit breaking
console.log(obj1.name || 'Sahil') // This will print 'Sahil'
// Similary this can be done with functions as well
const obj2 = {
    testFunction: function (name) {
        return `Hello ${name}`
    },
}
// Below circuit breaking statement will invoke the function if it is defined
console.log(obj2.testFunction && obj2.testFunction('Sahil'))

// Nullish coalescing Operator (??)
// We can rewrite the above statement which uses || circuit breaking logic
// This helps us to use the actual value of the variable in case it is defined
// This operator only checks if the value is null or undefined
// if it is not null or undefined, it returns the actual value stored in var
// even if its 0 or an empty string
console.log(obj1.name ?? 'Sahil') // This prints empty string

// optional chaining
// This operator allows us to avoid accessing nested properties of an object
// Example:
const obj3 = {
    name: {
        firstName: 'Sahil',
    },
}
console.log(obj3.name.firstName) // This prints 'Sahil' as it is present
// Now lets try to access a missing property
// console.log(obj3.spouseName.firstName) // This will throw an error: obj3.spouseName is undefined
// To avoid this, we can use optional chaining operator (?.)
console.log(obj3.spouseName?.firstName) // This will print undefined and will not throw error
// This is always useful while interacting with APIs and if we are not sure if a property
// is present or not.
