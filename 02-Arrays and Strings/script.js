"use strict";

const healthyFoods = [
  "Water",
  "Dark Green Vegetables",
  "Whole Grains",
  "Beans and Lentils",
  "Fish",
  "Berries",
  "Winter Squash",
  "Soy",
  "Flaxseed, Nuts and Seeds",
  "Organic Yogurt",
];

// console.log(healthyFoods["2"]);

// length

// console.log(healthyFoods.length);

// push

// const pushResult = healthyFoods.push("Fesnjan");

// console.log("pushResult", pushResult);

// unshift

// const unShiftResult = healthyFoods.unshift("Milk");

// console.log(healthyFoods);
// console.log("unShiftResult", unShiftResult);

// pop

// const popResult = healthyFoods.pop();

// console.log(healthyFoods);
// console.log("popResult", popResult);

// shift

// const shiftResult = healthyFoods.shift();

// console.log(healthyFoods);
// console.log("shiftResult", shiftResult);

// indexOf

// console.log(healthyFoods.indexOf('Water'));
// console.log(healthyFoods.indexOf('Milk'));

// includs

// console.log(healthyFoods.includes('Water'));
// console.log(healthyFoods.includes('Milk'));

//_______________Objects____________

const person = {
  name: "ali",
  height: 186,
  job: "teacher",
  relatives: [
    {
      name: "hasan",
      height: 176,
      job: "baker",
    },
  ],
};

const personName = person.name;
const personJob = person["job"];

person.score = 10;
person.name = "amir";

// console.log(person);

// console.log(personName, personJob)

//_______________Advanced Array Methodes___________
// at

// console.log(healthyFoods.at(-1));

// reverse

const reverseResult = healthyFoods.reverse();

// console.log(reverseResult, healthyFoods);

// concat
const numbers = [1, 2, 3, 4];
const newNumbers = [5, 6, 7, 8];

const concatResult = numbers.concat(newNumbers);
const concatResult2 = newNumbers.concat(numbers);

// console.log(concatResult, concatResult2);

// forEach
const students = [
  { name: "Edward", score: 21 },
  { name: "John", score: 37 },
  { name: "Kate", score: 45 },
  { name: "Jane", score: 12 },
  { name: "Tony", score: 13 },
  { name: "Edward", score: 37 },
  { name: "John", score: 15 },
];

/*
A: 35-50;
B: 20-35;
C: 0-20;
*/

function loopStudents(student, index) {
  console.log("index", index);
  console.log("student", student);
  console.log("-------------");
}

const claculateGrade = function (score) {
  if (score <= 20) {
    return "C";
  } else if (score > 20 && score <= 35) {
    return "B";
  } else if (score > 35 && score <= 50) {
    return "A";
  }
};

const calculateStudentGrade = function (student) {
  const score = student.score;
  // if (score <= 20) {
  //   student.grade = "C";
  // } else if (score > 20 && score <= 35) {
  //   student.grade = "B";
  // } else if (score > 35 && score <= 50) {
  //   student.grade = "A";
  // }
  student.grade = claculateGrade(score);
};

// students.forEach(calculateStudentGrade);

// console.log(students);

// const forEchResult = healthyFoods.forEach(function (item, index) {
//   console.log({ item, index });
// });

// console.log(forEchResult);

// map

const studentNames = students.map(function (item, index) {
  return item.name;
});

const studentNames1 = students.map((item) => item.name);

// console.log(studentNames);

// console.log(students);

// const studentWithGrades = students.map(function (student) {
//   student.grade = claculateGrade(student.score);
//   return student;
// });

const isAnyStudentA = students
  .map(function (student) {
    student.grade = claculateGrade(student.score);
    return student;
  })
  .some((student) => student.grade === "A");

// console.log("isAnyStudentA", isAnyStudentA);

// console.log(studentWithGrades);

// filter

const studentsWithGradeA = students.filter(function (student) {
  return student.grade === "A";
});

const studentsWithGradeB = students.filter((student) => student.grade === "B");

// console.log(studentsWithGradeA);
// console.log(studentsWithGradeB);

// find

const edward = students.find(function (item) {
  return item.name === "Edward";
});

// console.log(edward);

//findLast

const lastEdward = students.findLast(function (item) {
  return item.name === "Edward";
});

// console.log(lastEdward);

// findIndex

const edwardIndex = students.findIndex(function (item) {
  return item.name === "Edwardd";
});

// console.log("edwardIndex", edwardIndex);

// findLastIndex
const edwardLastIndex = students.findLastIndex(function (item) {
  return item.name === "Edward";
});

// console.log("edwardLastIndex", edwardLastIndex);

// some

const studentsScores = [50, 45, 65, 35, 75, 26, 61];

const didAnyStudentPass = studentsScores.some(function (score) {
  return score >= 60;
});

// console.log(didAnyStudentPass);
// every

const didAllStudentsPass = studentsScores.every((score) => score >= 60);

// console.log(didAllStudentsPass);

// flat

const arr = [1, 2, [3, 4, [5], ["x", [[[[[[[["y"]]]]]]]]]], 6];

// console.log(arr.flat());
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

const counts = [1, 2, 3]; // [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

const newCounts = counts.map((count) => [count, count * 2, count * 3]).flat();

// console.log("newCounts", newCounts);

// flatMap

const newCountsFlatMap = counts.flatMap((count) => [
  count,
  count * 2,
  count * 3,
]);

// console.log("newCountsFlatMap", newCountsFlatMap);

// slice

const personNames = ["Ali", "Hassan", "Reza", "Negar", "Amir"];

const slicedNames = personNames.slice(1, 3);
// console.log("slicedNames", slicedNames);

// console.log(personNames.slice(1));
// console.log(personNames.slice(-2));
// console.log(personNames.slice(0, -2));
// console.log(personNames.slice(2, -2));

const findMiddleIndex = (arr) => {
  if (arr.length % 2 !== 0) {
    const middleIndex = Math.ceil(arr.length / 2) - 1;
    console.log(middleIndex);

    console.log(arr.filter((item, index) => index !== middleIndex));
  } else {
    console.log("Array should have odd items!!❤");
  }
};

// findMiddleIndex([1, 2, 3, 4, 5, 6, 7]);

// splice

// console.log(personNames.splice(2, 2, "Maryam", "Hosein"));

// console.log(personNames);

// sort

const prices = [23, 45, 12, 56, 98, 34, 123];

const ascendingSortedPrices = prices.sort((a, b) => {
  return a - b;
});

// console.log("ascendingSortedPrices", ascendingSortedPrices);

const descendingSortedPrices = prices.sort((a, b) => {
  return b - a;
});

// console.log("descendingSortedPrices", descendingSortedPrices);

const sortedByScoreStudents = students.sort((a, b) => b.score - a.score);

// console.log("sortedByScoreStudents", sortedByScoreStudents);

// reduce

//[23, 45, 12, 56, 98, 34, 123]

const totalPrice = prices.reduce(function (acc, item) {
  return acc + item;
}, 0);

// console.log("totalPrice", totalPrice);

const transactions = [
  { description: "Salary", amount: 3000 },
  { description: "Rent", amount: -1000 },
  { description: "Groceries", amount: -250 },
  { description: "Bonus", amount: 500 },
  { description: "Utilities", amount: -200 },
];

const balance = transactions.reduce(
  (acc, transaction) => acc + transaction.amount,
  0
);

// console.log(balance);

const postiiveBalance = transactions.reduce((acc, item) => {
  if (item.amount > 0) {
    return acc + item.amount;
  }
  return acc;
}, 0);

// console.log("positiveBalance", postiiveBalance);

/*
//_____________Exercises_____________
1. Create an array of sentences from students array like this:

const students = [
  { name: "Edward", score: 21 },
  { name: "John", score: 37 },
  { name: "Kate", score: 45 },
  { name: "Jane", score: 12 },
  { name: "Tony", score: 13 },
  { name: "Edward", score: 37 },
  { name: "John", score: 15 },
];

output: ['Edward has scored 21', 'John has scored 37', ...]

*/
console.log(students);

const studentsReport = students.map(student => `${student.name} has scored ${student.score}`)
console.log(studentsReport);
/*
2. Use the reduce method to count the occurrences of each element in an array.

[1, 2, 1, 3, 4, 2, 5, 1, 6, 8, 7, 6]

{
  1: 3,
  2: 2, 
  ...
}
*/
const items = [1, 2, 1, 3, 4, 2, 5, 1, 6, 8, 7, 6]; //{ali: 3, hasan: 2}
const itemsCount = items.reduce((acc, item) => {
  if(acc[item]) {
    acc[item] = acc[item] + 1
  } else {
    acc[item] = 1
  }
  return acc;
}, {});

console.log(itemsCount);

const uniqueItems = items.reduce((acc, item)=>{
  if(!acc.some(number => number === item)) {
    acc.push(item)
  }
  return acc
}, []);

console.log(uniqueItems)

/*
3. sort by priority that priorityCategories array gives you.
if categories are the same sort by items's price descending:

const products = [
  { name: "Laptop", category: "Electronics", price: 800 },
  { name: "Banana", category: "Fruits", price: 1.5 },
  { name: "Headphones", category: "Electronics", price: 50 },
  { name: "Orange", category: "Fruits", price: 2 },
  { name: "TV", category: "Electronics", price: 1200 },
  { name: "Apple", category: "Fruits", price: 1 }
];

const priorityCategories = ["Fruits", "Electronics"];

*/

//_____________String methodes_____________

const myString = "I Love JavaScript";

// length

// console.log(myString.length);

const newString = new String("I Love JavaScript");

// console.log(newString);

// console.log(newString.length);

// console.log(typeof myString);
// console.log(typeof newString);

// console.log("first".length);

const value = "  \nmy-Name@Gmail.COM ";

// toLowerCase

// console.log(value.toLowerCase());

// console.log("my-Name".toLowerCase() === "my-name");
// toUpperCase
// console.log(value.toUpperCase());
// trim
// console.log(value);
// console.log(value.trim());

// includes

// console.log(myString.toLowerCase().includes("love".toLowerCase()));

// indexOf

// console.log(myString.indexOf("love"));
// console.log(myString.indexOf("a"));

// lastIndexOf
// console.log(myString.lastIndexOf("a"));

// charAt, at

// console.log(myString.charAt(8));
// console.log(myString[8]);
// console.log(myString.at(-1));

//charCodeAt
// console.log(myString.charCodeAt(8));

// startsWith
// console.log(myString.startsWith('I Love'));
// endsWith
// console.log(myString.endsWith('pt'));

// slice
const subString = myString.slice(-2);

// console.log(subString);
// console.log(myString);

// substring

// console.log("substring", myString.substring(2));
// console.log(myString);

// substr
// console.log("substr", myString.substr(2));

// replace
const emailValue = "  \nmy-Name @G mail .COM ";

// console.log(emailValue.toLowerCase().trim().replace(" ", ""));

// replaceAll
// console.log(emailValue.toLowerCase().trim().replaceAll(" ", ""));

// console.log(myString.replace("JavaScript", "PHP"));

const sentence1 = "my name is Sajjad Maleki";

const replaced = sentence1.replaceAll(/([A-Z])\w+/g, "Ali");

// console.log(replaced);

// match
// console.log(sentence1.match(/([A-Z])\w+/g));

// matchAll
// console.log(sentence1.matchAll(/([A-Z])\w+/g));

// template-string

const myName = "Sajjad";

let paraph = "My name is Ali.\nI am a developer";

paraph = "My name is " + myName + ".\nI am a developer";

paraph = `My name is ${myName}.
          I am a developer`;

// console.log(paraph);

// split

const words1 = sentence1.split(" ");

const words2 = sentence1.split(/([A-Z])\w+/g);
// console.log(words2);

const url = "http://my-site.com/products?id=124&name=mobile";

const queryString = url.split("?").at(1);

const queryParamStrings = queryString.split("&");

// {id: 124, name: 'mobile}

const queryParams = queryParamStrings.reduce((acc, item) => {
  const keyValuePair = item.split("=");
  const key = keyValuePair[0];
  const value = keyValuePair[1];

  acc[key] = value;
  
  return acc;
}, {});

// console.log(queryString);
// console.log(queryParamStrings);
// console.log(queryParams);

// const newUrl = new URL(url);
// console.log(newUrl)

const dataKey = 'fgo234-0-10';

const paramKey = dataKey.split('-')[0];
console.log(paramKey);

const words = ['I', 'Love', 'JavaScript'];
words.push('!');

const fullSentence = words.join(' ');
console.log(fullSentence);

