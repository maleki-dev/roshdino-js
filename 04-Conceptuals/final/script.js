"use strict";

//__________JS Engine and Runtime_____________


//________________Scoping_____________________


//_______Hoisting and Temporal Dead Zone______


//____________The this Keyword________________
// Global
// console.log('This in Regular FunctioGlobal', this)

// Regular Functions

const add = function(a, b) {
    console.log('This in Regular Functions', this)
    const arrow = () => {
        console.log('This in Arrow Functions', this)
    }
    arrow()
}

// add();

// Arrow Functions
// const arrow = () => {
//     console.log('This in Arrow Functions', this)
// }

// arrow()

//Object Methodes
const pet = {
    name: 'Kitty',
    meow (age) {
        console.log('This in Object Methodes', this)
        console.log(`${this.name} is ${age} old.`)
    }
}

// pet.meow(2);

const newPet = {name: 'Katty'};
newPet.meow = pet.meow;

// newPet.meow(1);

// const meow = pet.meow;

// meow(2);


const person = {
    name: 'Ali',
    birthYear: 1991,
    // calcAge() {
    //     const _this = this;
    //     const age = 2023 - _this.birthYear
    //     console.log(age) ;

    //     const isOld = function() {
    //         const output = `${_this.name} is ${age > 30 ? 'old' : 'young'}`
    //         console.log(output)
    //     }

    //     isOld()
    // }
    calcAge() {
        const age = 2023 - this.birthYear
        console.log(age) ;

        const isOld = () => {
            const output = `${this.name} is ${age > 30 ? 'old' : 'young'}`
            console.log(output)
        }

        isOld()
    },
   properties: {favorites: ['Pizza', 'Music']} 

}


person.calcAge();

// Event Listeners

const h1 = document.querySelector('h1');
h1.addEventListener('click' , function() {
    console.log(this);
    this.textContent = 'My H1'
});


//__________ Objects vs. primitives___________

const newPerson = person;

newPerson.name = 'hassan';

console.log(person);

const personShallowCopy = Object.assign({}, person);

personShallowCopy.name = 'Ghanbar';
personShallowCopy.properties.favorites=['Kabab']

console.log(person)

console.log(personShallowCopy)
