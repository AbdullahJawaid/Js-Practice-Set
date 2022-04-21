// Create element
const list=document.createElement('li');

// add class
list.className='collection-Item'

// add id

list.id='new-item'

// Set Attribute

list.setAttribute('title','New Item');

// create text node and append
list.appendChild(document.createTextNode('Hello World'));

// append li as child to ul

document.querySelector('ul.collection').appendChild(list);

list.style.background='black'
list.style.color='white'
console.log(list)