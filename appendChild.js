// alert('java script is attached')

let newHeading =document.getElementById('fist-heading');
    newHeading.innerHTML = 'new heading added by java script';

let parents = document.getElementById('parent');
let list = document.createElement('li');
    list.innerHTML ='first time creat element';
    parents.appendChild(list);

// document.getElementById('parent').childNodes
// document.getElementById('parent').parentNode