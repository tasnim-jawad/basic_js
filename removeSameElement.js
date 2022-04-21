let arrayLister =[1,2,4,5,5,8,7,4,9,6,5,8,7,4,5,4,58,47,8,5,4,5,6,36,45,78,8,8,5,6,4,52,1];
let newArray = [ ];
let count = 0;
for(let i = 0; i < arrayLister.length ; i++){
    let element =arrayLister[i];
    let unicIndex = newArray.indexOf(element);
    if (unicIndex === -1) {
        newArray.push(element)
    }
}
console.log(newArray);