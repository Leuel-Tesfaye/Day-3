// Things that already know before are assignment and arithmetic operators 
//comparison operators
// We use comparison operators to compare two values. We check if a value is greater or less or equal to other value.
console.log(0 == '')//true, equivalent 
console.log(0 ==='')//false, not exactly the same
console.log(undefined == null) // true, equivalent 
console.log(undefined === null) // false, not exactly the same

console.log('mango'.length == 'avocado'.length)//false 
console.log('mango'.length != 'avocado'.length)//true


//Logical Operators 

// the && (ampersand) operator : true only if both of the value are true
const check = 4 > 3 && 10 < 5 // false because both of them are not true 
console.log(check)

// the || (pipe or ) operator : true if either of the values becomes true
const check2 = 4 > 3 || 10 < 5 // true because either of the values is true
console.log(check2)

// the ! (negation) this negates true to false and vice versa
const check3 = 5 > 2 // true 
let check4 = !(5 > 2) // false 

// Ternary operators allows to write a condition. 
let isRaining = true
isRaining 
?console.log('you need a rain coat or an Umbrella')
:console.log('There is no need for a rain coat ')
isRaining = false

//alert() method displays an alert box with a specified message and an OK button.
alert('click ok to close!!')

// prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable.syntax : let variable = prompt('required text', 'optional text')
let number = prompt('Enter number', 'The number goes here ')
console.log(number)

//The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something.
let agree = confirm('Are you sure you want to delete')
console.log(agree)