// Write a function that takes a string and returns the first character of the string.
// Test your function on a few inputs, including the empty string.

function firstCharacter(string) { 
    console.log(string.charAt(0)) 
}

// Write a function that takes a string and returns the last character of a string.
// Test your function on a few inputs, including the empty string.

function lastCharacter(string) {
    console.log(string.slice(-1));
}

// Write a function that takes a string and a number,
// and returns the character at the position represented by the number.
// The indexing of number should start at 0. Test your function on a few inputs, including the empty string.

function characterPosition(string, number) {
    console.log(string.charAt(number))
}

// Write a function that takes two numbers and adds them together. Test your function on a few inputs.
// Write in the comments what happens when you pass something other than a number to your function.

function addNumbers(number1, number2){
    var localVariable=number1+number2
    console.log(localVariable)
}                                       // when other thing than number, the fonction concatenates (the strings for example)

// Write a function that takes two numbers and multiplies them together. Test your function on a few inputs.
// Write in your comments what happens when you pass something other than a number to your function.

function multiplyNumbers(number1, number2){
    var localVariable=number1*number2
    console.log(localVariable)
}                                       // when other thing than number, get a "NaN"

