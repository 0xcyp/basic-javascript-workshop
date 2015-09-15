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

// Write a function that takes a string, and returns the reverse of that string.
// For example, if you pass the function the string “hello”, it should return “olleh”.
// Test your function on a few inputs, including the empty string.

function reverseString(strg){
    return strg.split("").reverse().join("")
}

// Write a function that takes a number and returns the factorial of a number.
// The factorial of 5 is 5x4x3x2x1. The factorial of 0 is 1. Test your input on a few numbers, including negative numbers.

// ok, now it gets interesting. I'm gonna try to implement the gamma function, as you didn't specify if your number can have decimals, I assumed it can.
// so here we go

function gamma(z) { //accurate to about 15 decimals
    // tadaam - magic constants!
    var g = 7, // g represents the precision desired, C is the values of C[i] to plug into Lanczos' formula
        C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;

        var x = C[0];
        for (var i = 1; i < g + 2; i++)
        x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}

function factorialOfNumber(number) {
    if (number % 1 != 0 || number<0){
        return gamma(number + 1);
    }
    else {
       if(number == 0) {
           return 1;
       }
       for(var i = number; --i; ) {
           number *= i;
       }
       return number;
    }
}                                          // woot woot it works!

// Write a function that takes a phrase as a string, and returns the longest word in that phrase.
// If the phrase contains more than one such word, return the first occurrence. Test your function on a few inputs.


function longer(champ, contender) {
  return (contender.length > champ.length) ? contender: champ;
}

function longestWord(strg) {
    var words = strg.split(' ');
    return words.reduce(longer);
}

// Write a function that takes a phrase, and returns the same phrase with every word capitalized.
// For example, if you pass your function "hello world", it should return "Hello World"
// and if you pass it "HELLO WORLD" or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.

function everyWordCapitalized(strg) {
    return strg.replace(/\b\w+/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            
        }
    );
}

// Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.

function largestNumber(arr){
    return Math.max.apply( Math, arr );
};

// Write a function that takes an array, and returns a filtered array.
// The filtered array should only contain the truthy values from the initial array.
// Hint: there is an array method called “filter” that can help you with this :)

function filterArray(arr){
    return arr.filter(function (x) { return Boolean(x); });
};

