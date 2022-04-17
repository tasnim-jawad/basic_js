function factorial(number) {
    if (number == 0){
        return 1;
    }else if(number == 1){
        return 1;
    }else{
        let facto = number * factorial(number-1);
        return facto;
    }
}
let result = factorial(4)
console.log(result);