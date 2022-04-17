function chechLeapyear(year){
    if(( year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return  year +' is leapyear';
    }else{
        return year + ' is not leapyear';
    }
}
let result = chechLeapyear(2000);
console.log(result);