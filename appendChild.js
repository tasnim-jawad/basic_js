// alert('java script is attached')

let newHeading =document.getElementById('fist-heading');
    newHeading.innerHTML = 'new heading added by java script';

let parents = document.getElementById('parent');
let list = document.createElement('li');
    list.innerHTML ='first time creat element';
    list.setAttribute('class','last-childe');
    list.style.backgroundColor = 'green';
    parents.appendChild(list);

    let parentss = document.getElementById('parent');
    let lists = document.createElement('li');
        lists.innerHTML ='secend time creat element';
        lists.setAttribute('class','last-childe');
        lists.style.backgroundColor = 'tomato';
        parentss.appendChild(lists);


 let getClass = document.getElementsByClassName('last-childe');
 for(let i = 0; i < getClass.length; i++){
     let item =getClass[i];
     item.style.backgroundColor = 'yellow';
 }       

// document.getElementById('parent').childNodes
// document.getElementById('parent').parentNode


// let coloring = document.querySelector('ul li a')
// coloring.style.color='green';

// let colors = document.querySelector('ul li a span')
// colors.style.color='red';

let colorAll = document.querySelectorAll('ul li a');
for (let i = 0; i < colorAll.length; i++) {
    const element = colorAll[i];
    element.style.color = 'green';
}
// colorAll.style.color = 'red';