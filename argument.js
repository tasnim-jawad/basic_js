function argumentPrectice(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum =sum +element
    }
    return sum;
}
let result =argumentPrectice(12,30,40,50,24,33,44);
console.log(result);