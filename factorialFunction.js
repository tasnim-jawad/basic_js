function factorial(number){
    if(number == 0){
        return 1;
    }else{
        let factor = 1;
        for(i = 1; i <= number; i++){
            factor = factor * i;
        }
        return factor;
    }
    
}
let result =factorial(5);
console.log(result);