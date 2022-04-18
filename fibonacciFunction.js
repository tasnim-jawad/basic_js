
function fibonacci(number){
    let fibo =[0,1] ;
    for(let i = 2; i <= number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2] ;   //initialize in [i] number index
    };
    return fibo;        //after finished for loop work then return fibo
}
let result = fibonacci(10);
console.log(result);


