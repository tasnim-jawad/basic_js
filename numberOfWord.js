let sentence = 'i am a engineering     student. and i am a very good persone i live in dhaka';
let count = 1;
for(let i =0 ; i<sentence.length;i++){
    let element = sentence[i];
    if(element == " " && sentence[i-1] != " "){
        count++
    }
}
console.log(count)