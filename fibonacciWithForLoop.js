let fibonacci =[0,1];
let n = 20;
for(let i = 2; i <= n; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]; //ther is inserting number in fibbonacci's i index.for this reason array increase 1 mor element
}                                                   //and because of forloop it is continuouse looping and increaseing 
console.log(fibonacci)