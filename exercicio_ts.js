"use strict";
//F1: terminal --> "npm i --global typescript"
//"npx tsc --init" to initialise Typescript 
//"npx tsc" or "npx tsc --watch" to convert/copy ts to js
//Math function:
function multiply(firstNumber, secondNumber) {
    try {
        return firstNumber * secondNumber;
    }
    catch (error) {
        console.error('Sorry, there has been an error', error);
        return 0;
    }
}
//Hello function:
function sayHello(name) {
    try {
        return `Hello, ${name}!`;
    }
    catch (error) {
        console.error('Sorry, there has been an error', error);
        return '';
    }
}
//Checking results:
console.log(sayHello('Lu'));
console.log(multiply(15, 9));
