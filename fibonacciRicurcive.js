function fibonacci(number){
    if(number == 0){
        return [0];                                                     //call fibonacci array for number 0
    }else if(number == 1){
        return [0,1];                                                     //call fibonacci array for number 1
    }else{
        let fibo = fibonacci(number - 1);                                 //call fibonacci array for previous number
        let nextElement = fibo[number-1] + fibo[number-2];                 //call fibo array for next number (mean after previous number).and this happend over and over like loop.
        fibo.push(nextElement)
        return fibo;
    }
}
let result = fibonacci(10);
console.log(result);