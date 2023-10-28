"use strict";

const apiPath = "https://api.seriesquotes.10cyrilc.me";

const container = document.querySelector('.container');

//----------------------AJAX--------------------------

const request = new XMLHttpRequest();
request.open('GET', `${apiPath}/quote?series=dark&count=3`);
// request.send();
request.addEventListener('load', function() {
    const response = this.responseText;
    const data = JSON.parse(response);
    if(data.length) {
        data.forEach(({author = 'Author', series, quote}) => {
            const element = `
            <div class="quote">
                <h3 class="quote-author">${author}</h3>
                <p class="quote-text">${quote}</p>
                <h4 class="quote-serie">${series}</h4>
            </div>
            `
            container.insertAdjacentHTML('beforeend', element)
        })
    }
    
})

//---------------Promises and fetch api---------------

const renderQuote = ({author, series, quote}) => {
    const element = `
    <div class="quote">
        <h3 class="quote-author">${author || 'Author'}</h3>
        <p class="quote-text">${quote}</p>
        <h4 class="quote-serie">${series}</h4>
    </div>
    `
    container.insertAdjacentHTML('beforeend', element)
}

// fetch(`${apiPath}/quote?series=dark&count=3`)
// .then(res => res.json())
// .then(data => data.forEach(renderQuote))
// .catch(err =>  console.error('Fetch Error: ' +err))


//------------------The Event Loop--------------------

// console.log('Start!');
// setTimeout(()=>console.log('Timeout!'), 0);
// Promise.resolve('Promise!').then(res => console.log(res));
// console.log('End!')

//--------------------Async/Await--------------------

const fetchData = async function() {
    try {

        console.log('fetching ...')
        const res = await fetch(`${apiPath}/quote?series=dark&count=3`);
        console.log('fetched')
        const data = await res.json();
        
        data.forEach(renderQuote);
    } catch(err) {
        console.error('Fetch Error: ' +err)
    }
}

// fetchData();

Promise.all([
    fetch(`${apiPath}/quote?series=dark&count=3`),
    fetch(`${apiPath}/series`),
])
.then(res => res.map(item => item.json()))
.then(data => console.log(data))