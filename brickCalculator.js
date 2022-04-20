function brickCalculator(flore){
    if(flore <= 10){
        let brick = flore*15*1000;
        return brick;
    }else if(flore >10 && flore <= 20){
        let brick = flore*12*1000 + 10*3*1000;
        return brick;
    }else if(flore > 20 ){
        let brick = flore*10*1000 + 10*5*1000 + 10*2*1000;
        return brick;
    }
}
let result = brickCalculator(22)
console.log(result);