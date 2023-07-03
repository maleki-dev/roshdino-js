//---------- Linking a JavaScript File----------

// console.log("call");
//------------ Values and Variables-------------

// Variable name convention
// var name_ali = "ali";
// var votersCount = 30;
//javaScript

//----------------- Data Types ------------------
// 7 Primitive data types

//string
// var name = "hasan"; // "hasan", `hasan`;
// //number
// var count = -10.54;
// //boolean
// var isActive = false; //true
// //undefined
// console.log(x);
// var x = undefined;
// //null
// var y = null;
//symbol
//bigint

//------------ let, const and var-------------

var myName = "ali";
// console.log(myName);

myName = "hasan";
// console.log(myName);

// console.log( age);
let yourName = "hosein";
yourName = "reza";

const age = 30;
//age = 31;

//-------------- Basic Operators---------------
// Math operators
const sum = 1 + 2; // - , *, /,

const exp = 4 ** 3;

const str = "10";
const num = 10;

// console.log(str, " ", num);

// console.log(str + num);
// console.log(num + str);

const str1 = "java";
const str2 = "Script";

// console.log(str1 + str2);

// Assignment operators
let x = 4;
x += 1; //x = x + 1;
x /= 3;

x++;
++x;

// Comparison operators

const y = 10;
const isYGreater = y > x;
// y < x, y >= x, y <= x
const isEqual = x == y;
const isEqual2 = x === y;

//------------ Operator Precedence--------------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

//-------- Strings and Template Literals--------

const text = "Javascript is a perfect programming language.\nnext line";
// console.log(text);

const sentence = "It's very nice!";

const template = `Javascript is a perfect programming language.
${sentence}/${4 + 7}`;
// console.log(template);

//-------- Type Conversion and Coercion---------
// type conversion

// console.log(typeof template);
// console.log(typeof isEqual);

const myVar = "134";
const myVar2 = 13;

console.log(myVar, Number(myVar));
console.log(myVar2, String(myVar2));

console.log(undefined, String(undefined));

const numberd = Number("fdsge");

console.log(Number.isNaN(numberd));

// type coercion

// Truthy and Falsy Values

// 6 falsy values: 0, '', undefined, null, NaN, false

//------ Equality Operators: loose vs. strict --------

//loose

//strict

//--------------- Logical Operators ------------------

//---------------if / else Statements-----------------

//---------------The switch Statement-----------------

//------------Statements and Expressions--------------

//--------The Conditional (Ternary) Operator----------

//------------ Activating Strict Mode--------------

//------------------ Functions---------------------

// Function declaration

// calling or invoking or running function

// Function expression

// Arrow functions

// Loops
