/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1,l2){
    let area = l1*l2
    return area

}

console.log(area(10,20))
console.log(" ")
console.log("*******************************************************************************************************")

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(x1,x2){
    let result
    if (x1 == x2)
    {
         result = (x1 + x2) * 3
        
        return result
} else {
        result = x1 + x2 
      
      return result
}  
}
console.log(crazySum(12,13))
console.log(" ")

console.log("************************************************************************************************************")

/*

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
crazyDiff = function( givennumber){
    let difference
    
    {
    difference = givennumber - 19
    return difference * 3
    }
    }
    console.log(crazyDiff(37))
    console.log(" ")

    console.log("************************************************************************************************************")


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function(n){


    if(n===400 || (20 < n > 400))
    {
        return true
    }else{
    return false
    }
    }
    console.log(boundary())
    console.log(" ")

    console.log("************************************************************************************************************")



/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function(s){
    if(s.startsWith('Strive'))
    {
        return s
    }
    else 
    {
         return 'Strive'  + ' ' + s
    }
}

console.log(strivify('stop'))
console.log(strivify('Strive'))
console.log(" ")

console.log("************************************************************************************************************")

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

const check3and7 = function(z){
    if(Math.sign(z) === 0 || Math.sign(z) === -1 )
    {
        return 'The number is not a  positive number'
    }

    let remenderOf3 = z % 3
    let remenderOf7 = z % 7 
    
    if(remenderOf3 === 0)
    {
        return 'the number is multiple of 3'
    }    
    else if ( remenderOf7 === 0 )
    {
        return 'the number is multiple of 7'

    }
}
console.log(check3and7(15))
console.log(" ")

console.log("************************************************************************************************************")


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).

*/

/* WRITE YOUR CODE HERE */
const reverseString = function(str){

    let splitString = str.split('')
    let reverseStringArray = splitString.reverse()
    let newString = reverseStringArray.join('')
    return newString
    }
    console.log(reverseString('striver is here'))
    console.log(" ")

    console.log("************************************************************************************************************")


/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function(str){
    let splitString = str.split(' ')
    
    for( i = 0; i < splitString.length ; i++ )
    {
     splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
                
 }
 return splitString.join(' ')
 }
 console.log(upperFirst('welcome to the strive school'))
 console.log(" ")

 console.log("************************************************************************************************************")

 

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = function (str){
    return  str.slice(1, str.length -1)
     }
 console.log(cutString('Strive'))
 console.log(" ")

 console.log("************************************************************************************************************")


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = function ( ){
    return Math.floor(Math.random() * 10)
     
 }
 console.log(giveMeRandom())
 console.log(" ")

 console.log("************************************************************************************************************")

 

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/