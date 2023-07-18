"use strict";
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

// console.log(myVar, Number(myVar));
// console.log(myVar2, String(myVar2));

// console.log(undefined, String(undefined));

const numberd = Number("fdsge");

// console.log(Number.isNaN(numberd));

// console.log("boolean", Boolean("dfr"));

// Truthy and Falsy Values
// 6 falsy values: 0, '', undefined, null, NaN, false

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(Number("fdsge"))); // NAN
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// type coercion
// console.log(1 + '2');

//------ Equality Operators: loose vs. strict --------

//loose
// console.log(12 == '12');

//strict
// console.log(12 === '12');

//--------------- Logical Operators ------------------
// const firstName = null; //'Tommy';
// const nickName = "Tom";

// const finalName = firstName || nickName || true || 34;

// const hasNameAndNickName = Boolean(firstName && nickName);

// // console.log(finalName)
// // console.log(hasNameAndNickName)

// const content = "";
// const isLoading = !content;

// console.log(isLoading);

//---------------if / else Statements-----------------

// let day = "MONDAY";

// if (day === "SUNDAY") {
//   console.log("Play football");
// } else if (day === "MONDAY") {
//   console.log("Do swimming");
// } else if (day === "TUESDAY") {
//   console.log("Do Hiking");
// } else {
//   console.log("Rest");
// }

//---------------The switch Statement-----------------

// switch (day) {
//   case "SUNDAY":
//     console.log("Play football");
//     break;
//   case "MONDAY":
//     console.log("Do Swimming");
//     break;
//   case "TUESDAY":
//     console.log("Do Hiking");
//     break;
//   default:
//     console.log("Rest");
// }

//------------Statements and Expressions--------------

const sum2 = Number("Play football");

// console.log("sum2", sum2);

//--------The Conditional (Ternary) Operator----------

// const firsName = "Tommy";
// const nickName = "Tom";

// const finalName = firsName ? firsName : nickName;

// const html = isLoading ? "<p>loading ...</p>" : content;

// const sectionHtml = content === "section" ? "<p>loading ...</p>" : content;

//------------ Activating Strict Mode--------------

// let isGradueted = false;

// isGraduetd = true;

// if (isGraduetd) {
//   console.log("Go to military");
// } else {
//   console.log("Continue Studying");
// }

//------------------ Functions---------------------

// Function declaration

function logger(name, name2) {
  console.log("logger", name, name2);
}

// calling or invoking or running function
// logger("Hasan", "Ali");

// Function expression
const myExpFunc = function () {
  console.log("expression ...");
  return "returned value";
};

// console.log(myExpFunc());

// Arrow functions

const myArrowFunc = () => {
  console.log("Arrow ...");
  return "returned value from arrow";
};

const myArrow2 = (name) => `name is ${name}`;

// console.log(myArrowFunc());
// console.log(myArrow2('Ali'));

// Hoisting
console.log(getName("Ali"));
// console.log(getAge(26));
// console.log("job", job);
// console.log("favoriteSong", favoriteSong);

function getName(name) {
  return `name is ${name}`;
}

const getAge = function (age) {
  return `age is ${age}`;
};

var job = "teacher";
const favoriteSong = "Bridge";

// Loops
// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

do {
  console.log(i);
  i++;
} while (i < 10);
