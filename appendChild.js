// alert('java script is attached')

let newHeading =document.getElementById('fist-heading');
    newHeading.innerHTML = 'new heading added by java script';

let parents = document.getElementById('parent');
let list = document.createElement('li');
    list.innerHTML ='<a>first time creat element</a>';
    list.setAttribute('class','child newItem');
    list.style.backgroundColor = 'green';
    parents.appendChild(list);

    let parentss = document.getElementById('parent');
    let lists = document.createElement('li');
        lists.innerHTML ='<a>secend time creat element</a>';
        lists.setAttribute('class','child newItem');
        lists.style.backgroundColor = 'tomato';
        parentss.appendChild(lists);


      
        let getClass = document.getElementsByClassName('newItem');
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

// let remove = document.getElementsByClassName('child')
// for(let i = 0; i<remove.length; i++){
//     let element =remove[i];
//     element.addEventListener('click',function(event){
//         // console.log(event.target.parentNode)
//         event.target.parentNode.removeChild(event.target)
//     })
// }

let remove = document.getElementById('parent');
    remove.addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})

let button = document.getElementById('button')          //item added by click button
button.addEventListener('click',function(){
    let perentItem =document.getElementById('parent');
    let newItem = document.createElement('li');
    newItem.setAttribute('class','newItem child')
    newItem.innerHTML ='<a> added new li </a>';
    newItem.style.backgroundColor = 'orange';
    perentItem.appendChild(newItem);
})





