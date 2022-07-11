//console.log(document.documentElement);
//console.log(document.body);
//console.log(document.head);
//console.log(document.body.firstElementChild);

//console.log(document.getElementsByTagName('li'));

//console.log(document.querySelectorAll('div'));

//const title = document.querySelector('#main-heading');

//title.style.color='blue';

//console.log(title);

const ul=document.querySelector('ul');
const li=document.createElement('li');

ul.append(li);

//firstListItem=document.querySelector('.list-items');

li.innerText='X-Men';

//Attributes DOM

li.setAttribute('id','main-heading');
li.removeAttribute('id');

const title =document.querySelector('#main-heading');

console.log(title.getAttribute('id'));