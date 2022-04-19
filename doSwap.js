//temporary variable diye value cheng kora
let a = 5;
let b = 7;

let temp = a;
a = b;
b = temp;

console.log(a,b) //chenged value

//mathmatically value cheng kora
let x = 5;
let y = 7;
x = x+y;
y= x-y;
x= x-y;

console.log(x,y) //chenged value

//array diye value cheng kora

let p = 5;
let q = 7;

[p,q] = [q,p];

console.log(p,q) //chenged value