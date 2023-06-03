//1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let FirstName = 'Leuel'
let middleName = 'Leuel'
let lastName = 'Tesfaye'
let country = 'Ethiopia'
let city = 'Dessie'
let age = 23
let isMarried = 'single'
let Year = new Date()

console.log(FirstName != lastName)
console.log(FirstName == city)
console.log(FirstName == middleName)
console.log(country > city)
console.log(age == isMarried)
console.log(typeof age == typeof city)// checks if the datatype is the same or not
console.log(typeof Year == age)

//2: Check if type of '10' is equal to 10
let number = '10'
console.log(typeof number == 10)

//3: Check if parseInt('9.8') is equal to 10

let NumFloat = parseInt('9.8')
console.log(typeof NumFloat == 10)
// 4 : Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

let isSunny = true
isSunny
    ? console.log('The weather is Sunny')
    : console.log('The weather is Rainy')
isSunny = false

let num1 = '5'
console.log(typeof num1 === String)// false
// 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4)// false
console.log(4 != '4')//false
console.log(4 == '4')// true
console.log(4 === '4')// false
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 > 3 && 10 > 12)) // true
console.log(!(4 === '4')) // true
console.log("There is no 'on' in both dragon and python ") // false


// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

let fullYear = new Date()
console.log(fullYear.getFullYear())

let month = new Date()
console.log(month.getMonth())

let Today = new Date()
console.log(Today.getDay())


                    //Exercises: Level 2
// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt ('Enter base :') 
// let height = prompt ('Enter height')
// console.log( 'The area of the triangle is ' + 0.5 * base * height)

// // 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let sideA = prompt ('Enter side a ')
// let sideB = prompt ('Enter side b')
// let sideC = prompt ('Enter side c ')
// const side = parseInt(sideA + sideB + sideC)/2
// console.log( `The perimeter of the triangle is  ${side}` )

// // 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let length = prompt('Enter length of a rectangle ')
// let width = prompt ('Enter width of a rectangle')
// // the area of a rectangle is 

// let area = (length * width )
// console.log(`The area of a rectangle is ${area}`)

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let r = prompt('Enter r')
// let r2 = prompt('Enter the second r')
// let pi = 3.14
// let CircleArea = pi * r * r2
// console.log(`The area of a circle is ${CircleArea}`)

// 5. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/**let hour = prompt('Enter hour')
let Salary = prompt ('Enter rate per hour')
let salaryPerHour = hour * 5 * Salary

console.log('Your weekly earning is ' + salaryPerHour )
*/

//6. If the length of your name is greater than 7 say, your name is long else say your name is short.

/**let name = prompt ('Please enter your name ')
if (name.length > 7) {
    console.log('your name is Long')
}
else (
    console.log('your name is short')
)   */

// 7. Compare your first name length and your family name length and you should get this output.
let firstName = ('Leuel')
let LastName = (' Tesfaye')

if(firstName.length > lastName.length && lastName.length < firstName.length){
    console.log('your first name ' + firstName +  'is longer than your family name' + lastName)
}
else(
    console.log('your first name ' + firstName + 'is shorter than your family name ' + lastName)
) 

//8. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250 
let yourAge = 25 
let result = myAge - yourAge
console.log('I am ' + result + ' ' +  'years older than you')

//9. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let DateOfBirth = prompt('Please Enter your Date of Birth ')
let Age = new Date().getFullYear() - DateOfBirth 
if (Age >= 18) {
    alert('You are' + Age + 'years old. You are allowed to drive')
}
else {
    let waitYears = 18 - Age 
    alert('you are ' + " " + Age + " " + ' years old. you need to wait' + " " + waitYears + 'more years to drive')
}
