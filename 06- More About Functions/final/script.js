"use strict";

//---------------------Default Parameters---------------------

const hotel = {
    id: 125,
    name: 'Grand',
    book(name, count = 1) {
        if(count < 1) {
            console.error('count must be over 1')
            return
        }
        console.log(`${name} booked ${count} bed${count === 1 ? '' : 's'} successfully!`)
        // const bedCount = count || 1;
        // console.log(`${name} booked ${bedCount} beds successfully!`)
    }
}

// hotel.book('Amir', 2);
// hotel.book('Ali');




//--------- Functions Accepting Callback Functions------------


const convertToOneWord = (str = '') => str.replaceAll(' ', '').toLowerCase();

const upperFirstWord = (str = '') => {
    const words = str.split(' ');
    // return [words[0].toUpperCase(), ...words.slice(1)].join(' ');

    const firstWord = words.splice(0, 1)[0].toUpperCase();
    return [firstWord, ...words].join(' ');

}


const transformer = (str, fn) => {
    console.log(fn.name + ': ' + fn(str))
    return 
}

// transformer('i love javascript',upperFirstWord )
// transformer('i love javascript',convertToOneWord )


//---------------- Functions Returning Functions--------------

const counter = function (step) {
    let count = 0;
    return function() {
        count += step;
        console.log(count)
    }
}

const plus1 = counter(1);
const plus2 = counter(2);


// plus1()
// plus1()
// plus1()
// plus2()




//---------------- The call and apply Methods--------------


const mahanAirline = {
    name: 'Mahan',
    book(name, fn = 'MN08') {
        console.log(`flight ${fn} of ${this.name} reserved by ${name}`)
    }
};

// mahanAirline.book('Sajad');

const luftansa = {
    name: 'Luftansa',
    planes: 10,
    buyPlane() {
        this.planes += 1;
    }
}

// mahanAirline.book.call(luftansa, ...['Sajjad', 'LF107']);
// mahanAirline.book.apply(luftansa, ['Sajjad', 'LF107']);



//--------------------- The bind Method--------------------

const bookLuftansa = mahanAirline.book.bind(luftansa); 

bookLuftansa('Sajjad', '103LF');

const buyPlaneButton = document.querySelector('.buyPlaneButton');

const buyPlaneForLuftansa = luftansa.buyPlane;

buyPlaneButton.addEventListener('click', luftansa.buyPlane)
console.log(luftansa);
/*


//-------Immediately Invoked Function Expressions (IIFE)----


//------------------------- Closures------------------------
console.dir(plus1)
console.dir(plus2)
*/
