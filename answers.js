// Write a function that takes a string and returns the first character of the string.
// Test your function on a few inputs, including the empty string.

function firstCharacter(string0) { 
    return string0.charAt(0) 
}

// Write a function that takes a string and returns the last character of a string.
// Test your function on a few inputs, including the empty string.

function lastCharacter(string1) {
    return string1.slice(-1)
}

// Write a function that takes a string and a number,
// and returns the character at the position represented by the number.
// The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function characterPosition(string2, number0) {
    return string2.charAt(number0)
}

// Write a function that takes two numbers and adds them together. Test your function on a few inputs.
// Write in the comments what happens when you pass something other than a number to your function.

function addNumbers(number1, number2){
    return number1+number2
}                                       // when other thing than number, the fonction concatenates (the strings for example)

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs.
// Write in your comments what happens when you pass something other than a number to your function.

function multiplyNumbers(number3, number4){
    return number3*number4
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

// long and boring function...

function doAsISayWithNumbers(number5, number6, string2) {
    switch(string2) {
    case "add":
        return number5+number6
        break;
    case "substract":
        return number5-number6
        break;
    case "mult":
        return number5*number6
        break;
    case "div":
        return number5/number6
        break;
    default:
        console.log(0)
    }
}

// Write a function that takes a string and a number, and returns the string repeated that many number of times.
// Test your function with various inputs.

function repeatedString(string3,number7){