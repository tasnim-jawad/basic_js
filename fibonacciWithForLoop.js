let fibonacci =[0,1];
let n = 20;
for(let i = 2; i <= n; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci)