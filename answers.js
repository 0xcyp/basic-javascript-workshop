// Write a function that takes a string and returns the first character of the string.
// Test your function on a few inputs, including the empty string.

function firstCharacter(strg) { 
    return strg.charAt(0) 
}

// Write a function that takes a string and returns the last character of a string.
// Test your function on a few inputs, including the empty string.

function lastCharacter(strg) {
    return strg.slice(-1)
}

// Write a function that takes a string and a number,
// and returns the character at the position represented by the number.
// The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function characterPosition(strg, number) {
    return strg.charAt(number)
}

// Write a function that takes two numbers and adds them together. Test your function on a few inputs.
// Write in the comments what happens when you pass something other than a number to your function.

function addNumbers(number1, number2){
    return number1+number2
}                                       // when other thing than number, the fonction concatenates (the strings for example)

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs.
// Write in your comments what happens when you pass something other than a number to your function.

function multiplyNumbers(number1, number2){
    return number1*number2
}                                       // when other thing than number, get a "NaN"

// Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers.
// If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product.
// If the string is ‘div’, return the ratio. Otherwise return 0.

/* function doAsISayWithNumbers(number5, number6, string2){
    if (string2==="add") {
        var localVariable1=number5+number6
        console.log(localVariable1)
    }
    if else (string2==="substract") {
        var localVariable2=number5+number6
        console.log(localVariable2)
    }
    if else (string2==="mult"){
        var localVariable3=number5*number6
        console.log(localVariable3)
    }
    if else (string2==="div"){
        var localVariable4=number5/number6
        console.log(localVariable4)
    }
    else{
        console.log(0)
    }
} */

// long and boring function... I prefer switch:

function doAsISayWithNumbers(number1, number2, strg) {
    switch(strg) {
    case "add":
        return number1+number2
    case "substract":
        return number1-number2
    case "mult":
        return number1*number2
    case "div":
        return number1/number2
    default:
        console.log(0)
    }
}

// Write a function that takes a string and a number, and returns the string repeated that many number of times.
// Test your function with various inputs.

function repeatedString(strg,number) {
    return strg.repeat(number)
}

