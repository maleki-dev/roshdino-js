/*
____________Exercise 1____________ 
 We want the color of the circle to change depending on the type of cursor movement.
 Create a function toggleColor and use it in event listeners to turn the circle orange
 when the cursor moves onto it and turn it black when the cursor leaves it.
*/


/*
____________Exercise 2____________ 
 Add a mouseover event listener to all list items in a loop that changes the
 value of list item from OFF to ON
*/

const listElement = document.getElementById('list');
const listItemElements = listElement.children;

Array.from(listItemElements).forEach(element => element.addEventListener('mouseover', function() {
    element.textContent = 'ON';
}));

Array.from(listItemElements).forEach(element => element.addEventListener('mouseout', function() {
    element.textContent = 'OFF';
}));