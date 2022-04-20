function woodCalculator(chair,table,bed){
    let wood = chair*1 + table*3 + bed*5 +' ft^3';

    return wood;
} 
let result = woodCalculator(12,10,10)
console.log(result);