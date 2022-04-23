let bgColor =document.getElementById('dada');
    bgColor.onclick = function(){
        this.style.backgroundColor ='red'
        console.log('color cheng')
        }

let baba =document.getElementById('parent');
    baba.onclick = function(){
        this.style.backgroundColor ='blue'
        console.log('color cheng ul')
        }

let boroChele =document.getElementById('first-childe');
boroChele.onclick = function(){
    this.style.backgroundColor ='gray'
    console.log('color cheng li -1')

    }

let mejhoChele =document.getElementById('secend-childe');
mejhoChele.onclick = function(){
    this.style.backgroundColor ='gray'
    console.log('color cheng li -2')
    }

let shejoChele = document.getElementById('third-childe');
shejoChele.addEventListener('click', function(){
    this.style.backgroundColor ='gray';
    console.log('color cheng li -3');
    window.event.stopPropagation()
    });