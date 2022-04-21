let a = 100;
let b = 20;
let c = 101;

if(a > b){
    if(a > c){
        console.log('(a = ' + a +') is bigger then all');
    }else{
        console.log('(c = ' + c +') is bigger then all')
    }
}else if(b > c){
    console.log('(b = ' + b +') is bigger then all');
}

let bigNumber = Math.max(a,b,c);
console.log(bigNumber);
