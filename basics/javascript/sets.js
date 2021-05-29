/*
  javascript file to demonstrate:
  - Use of strict mode
  - Use of 'this' keyword
  This script file can be viewed in browser/editor but can only be executed once added to an HTML file through <script> tag.
*/

// Use of strict mode allows us to avoid common bugs like making typos while using a declared variable
'use strict'

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Friday',
]

// Create set from Array
const daysSet = new Set(days)

// Set is a unique set of values
// So it will not pring repetitive values
console.log(daysSet)

// Get size of a set
console.log(`Size of set: ${daysSet.size}`)

// Check if a value is present in set
console.log(daysSet.has('Friday')) // This will return true as it is present

// Add new element
daysSet.add('Custom Day')
console.log(daysSet)

// Delete an element
daysSet.delete('Custom Day')
console.log(daysSet)

// Looping over set
for (const day of daysSet) {
    console.log(day)
}

// Creating an array from set
const uniqueDaysArray = [...daysSet]
console.log(uniqueDaysArray)

// Delete all elements
// daysSet.clear()
console.log(daysSet)

// forEach() for looping over elements in set
// forEach() in sets do not pass any index to callback function as
// sets do not have any index or key.
daysSet.forEach(function(value, _, map){
    console.log(`value: ${value}`)
})

