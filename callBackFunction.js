function callBack(name,roll,task){
    return 'i am '+name + '.My roll number is '+roll +'.' +task
}
function old(age){
    return 'I am '+age +' years old.'
}
function address(home){
    return 'I live in '+home +'.';
}
let result = callBack('mutashim',13,old(27));
console.log(result);

let result2 = callBack('tasnimul hasan',14,address('dhaka'));
console.log(result2);
