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
  categories: [
    {
      id: 1,
      name: "سریال",
      slug: "series",
      parent: null,
    },
    {
      id: 516,
      name: "سریال اکشن",
      slug: "action-series",
      parent: {
        id: 1,
        name: "سریال",
        slug: "series",
        parent: null,
      },
    },
  ],
  countries: [
    {
      id: 449,
      name: "آمریکا",
      parent: null,
      slug: "usa",
    },
  ],
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

  getAwards() {
    return ['return1', 'return2'];
  },
};


//--------------Destructuring----------------

// Destructuring Arrays

// Multiple return values from a function

// Switching variables

// Nested destructuring

// Default values

// Destructuring Objects

// Default values

// Nested objects


//--------------Spread Operator----------------
// For Arrays

// Iterables: arrays, strings, maps, sets.

// For Objects

//------- Rest Pattern and Parameters--------
// SPREAD, because on RIGHT side of =

// REST, because on LEFT side of =

// Objects

//Arrays

// Functions

//----------- Modern operators-------------
// Short Circuiting (&& and ||)

// The Nullish Coalescing Operator

// Optional Chaining

