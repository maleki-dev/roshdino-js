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

console.log(students);

const studentWithGrades = students.map(function (student) {
  student.grade = claculateGrade(student.score);
  return student;
});

console.log(studentWithGrades);

// filter

const studentsWithGradeA = students.filter(function (student) {
  return student.grade === "A";
});

const studentsWithGradeB = students.filter((student) => student.grade === "B");

console.log(studentsWithGradeA);
console.log(studentsWithGradeB);

// find

const edward = students.find(function (item) {
  return item.name === "Edward";
});

console.log(edward);

//findLast

const lastEdward = students.findLast(function (item) {
  return item.name === "Edward";
});

console.log(lastEdward);

// findIndex

// findLastIndex

// some

// every

// flat

// flatMap

// slice

// splice

// sort

// reduce
