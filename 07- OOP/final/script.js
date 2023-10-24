"use strict";
// Object Oriented Programming

const ali = {
  firstName: "Ali",
  sureName: "Alavi",

  fullName() {
    return `${this.firstName} ${this.sureName}`;
  },
};

// console.log(ali.fullName());

function Person(firstName, sureName) {
  this.firstName = firstName;
  this.sureName = sureName;
  //   console.log(this);
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.sureName}`;
};

const person1 = new Person("Ali", "Alavi");
const person2 = new Person("Sajjad", "Maleki");

// console.log(person1.fullName());
// console.log(person2.fullName());

console.log(person1);

// const arr = new Array(5).fill(1)

class PersonCl {
  constructor(firstName, sureName) {
    this.firstName = firstName;
    this.sureName = sureName;
  }

  fullName() {
    return `${this.firstName} ${this.sureName}`;
  }
}

const person3 = new PersonCl("reza", "hasani");

console.log(person3.fullName());

//inheritance

class Student extends PersonCl {
  constructor(firstName, sureName, grade) {
    super(firstName, sureName);
    this.grade = grade;
  }

  study() {
    console.log(`${this.fullName()} is studying at grade ${this.grade}`);
  }
}

const student1 = new Student("Hasan", "Kazemi", "Elemntary");
// console.log(student1.study());

// Polymorphism
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("general animal sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}

const kitty = new Cat("Kitty");
const rex = new Dog("Rex");

kitty.makeSound();
rex.makeSound();

// getter

class PersonCl2 {
  constructor(firstName, sureName) {
    this.firstName = firstName;
    this.sureName = sureName;
  }

  get fullName() {
    return `${this.firstName} ${this.sureName}`;
  }
}

const person4 = new PersonCl2("habib", "rezai");

console.log(person4.fullName);

// inheritance in constructor functions
function Person2(firstName, sureName) {
  this.firstName = firstName;
  this.sureName = sureName;
  //   console.log(this);
}

Person2.prototype.fullName = function () {
  return `${this.firstName} ${this.sureName}`;
};

function Student2(firstName, sureName, grade) {
  Person2.call(this, firstName, sureName);
  this.grade = grade;
}

Student2.prototype = Object.create(Person2.prototype);

const student3 = new Student2("rajab", "shabani", "Elementary");

console.log(student3.fullName());
