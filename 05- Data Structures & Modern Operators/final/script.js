"use strict";
const data = {
  id: 25896,
  title: "آخرین بازمانده از ما",
  userRate: 7,
  imdbScore: 9.2,
  rottenTomatoesScore: 97,
  metacriticScore: 84,
  isUserFavorite: true,
  isOnChart: null,
  favoriteCount: 12,
  awards: ["Acadamy Award", "Cannes Festival"],
  viewCount: 556,
  commentsCount: 3,
  image:
    "https://api.tvrooz.com/uploads/2023/1/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpeg",
  cover:
    "https://api.tvrooz.com/uploads/2023/1/the-anarchists-s01-ka-1920.jpeg",
  createdAt: "سه‌شنبه 27 دی  1401 ساعت 16:27",
  boxOffice: {
    amount: 1450000,
    currency: "DOLLAR",
  },
  budget: {
    amount: 120000,
    currency: "EURO",
  },

  category: null,

  countries: [
    {
      id: 449,
      name: "آمریکا",
      parent: null,
      slug: "usa",
    },
  ],
  trivia: [],
  crew: [
    {
      id: 5572,
      image: "https://api.tvrooz.com/uploads/2023/1/Pedro-Pascal-2.jpeg",
      name: "پدرو پاسکال",
      slug: "pedro-pascal",
      type: "STAR",
    },
    {
      id: 9902,
      image: "https://api.tvrooz.com/uploads/2023/1/بلا-رمزی-1.jpeg",
      name: "بلا رمزی",
      slug: "bella-ramsey",
      type: "STAR",
    },
  ],
};


//--------------Destructuring----------------

// Destructuring Arrays

// const significantAward = data.awards[0];
// const lessImportantAward = data.awards[1];

let [significantAward, lessImportantAward] = data.awards;

// Switching variables

[significantAward, lessImportantAward] = [lessImportantAward, significantAward];


// Multiple return values from a function

function myFunc () {
  const a = 10;
  const b = false;

  return [a, b];
};

const [a, b] = myFunc()

// console.log(a, b)

// Nested destructuring

const arr = [1, 4, [6, [7]]];

const [c, d, [e, [f]]] = arr;

// console.log(c, d, e, f)

// Default values

const [trivia = 'not found'] = data.trivia

// console.log(trivia);

// Destructuring Objects

const {amount: boxOfficeAmount, currency: boxOfficeCurrency} = data.boxOffice;

// const {amount, currency} = data.budget;

// console.log(boxOfficeAmount, currency)

// Default values

const {name = data.title} = data;

// console.log(name)

// Nested objects

const {budget: {amount: budgetAmount, currency: budgetCurrency}} = data

//--------------Spread Operator----------------
// For Arrays

const nums = [1, 2, 3, 4];

const nums2 = [5, 6];

const nums3 = [7, 8, ...nums]

// console.log(nums3)

function func1(a, b ,c ,d) {
  console.log(a, b ,c ,d)
}

// func1(...nums)

// Iterables: arrays, strings, maps, sets.

const str = 'javascript';
const arrayFromStr = [...str]
// console.log(arrayFromStr)

// For Objects

const newData = {
  ...data,
  name: 'my name',
}

// console.log(newData)

//------- Rest Pattern and Parameters--------
// SPREAD, because on RIGHT side of =

// REST, because on LEFT side of =

//Arrays
const [, num2, ...otherNums] = nums;

// console.log(num2, otherNums)

// Objects
const {_id, ...mediaData} = data

// Functions

// function func2(...args) {
//   console.log(args)
//   console.log(...args)
// }

// func2(...nums)

//----------- Modern operators-------------
// Short Circuiting (&& and ||)

const {firstName = 'my name'} = data;

// console.log(null || false  || '0' || 'no name');

// console.log(null && firstName && false)

// isvailable && price

// The Nullish Coalescing Operator

// console.log(false ?? '' ?? undefined)

// Optional Chaining


// const parentId = data.category.parent ? data.category.parent._id : undefined
const parentId = data.category?.parent?.id

console.log(parentId);

let myArr = [1, 2, 3];

myArr = null;

const firstItem = myArr?.[0];

const add = null;

add?.(1);

