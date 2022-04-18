function primeNumber(number){
    for (i=2;i<number;i++){
        console.log(i , number/i)
        if(number%i == 0){
            return  number + ' is not a prime number.';
        }
    }
    return  number + ' is a prime number.';
}
let result = primeNumber(111);
console.log(result);