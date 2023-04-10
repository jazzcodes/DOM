// // Selecting Elements in the DOM

// // getElementById()

// const heading=document.getElementById('main-heading');
// console.log(heading);

// // getElementsByClassName()

// const listItem=document.getElementsByClassName('sports-item');
// console.log(listItem);


// //  getElementsByTagName()
// const list = document.getElementsByTagName('ul');
// console.log(list);

// //querySelector()

// const container = document.querySelector('div');
// console.log(container);
// // outputs first occurrence of the element mentioned

// const allContainers=document.querySelectorAll('div');
// console.log(allContainers);
// // outputs all the occurrences of the element mentioned
// // Node list in O/P (array like structure)

// DOM Manipulation
// Styling an Element

// const title = document.querySelector('#main-heading');
// title.style.color='red';

// // It applies the inline style 
// // therefore, we need to iterate individually over the list items, otherwise it won't work

// let li=document.querySelectorAll('.sports-item');
// const ul=document.querySelector('.sports');

// for(i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='pink';
// }

// // use camelCase even for css properties and not snake-case


// // Creating Elements

// const ul=document.querySelector('ul');
// const li=document.createElement('li');

// // Adding Elements

// ul.append(li);

// // Playing with Text

// const firstListItem=document.querySelector('.sports-item');

// console.log(firstListItem.innerText);   //The text only
// console.log(firstListItem.textContent); // The text along with indentation
// console.log(firstListItem.innerHTML);   // The markup (innerHTML)


// // Modifying the Text

// li.innerText='Baseball';

// firstListItem.innerHTML='okay';


// // Modifying Attributes and Classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title=document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));


// li.classList.add('sports-item');
// li.classList.remove('sports-item');

// console.log(li.classList.contains('sports-item')); // testing


// // Removing Elements

// li.remove();


// Traverse the DOM

// Parent Node Traversal

let ul=document.querySelector('ul');
 
console.log(ul.parentNode);   // It can be anything like #text, #document, etc.
console.log(ul.parentElement); // These refer all elements like comments, line breaks, headings, etc

console.log(ul.parentNode.parentNode); 
console.log(ul.parentElement.parentElement);

// difference b/w parentNode and parentElement in action

let html=document.documentElement; // whole html (can be hovered over the property in the 'inspect' to see what it covers on the page)
console.log(html.parentNode);   
console.log(html.parentElement);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor='black';


console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);