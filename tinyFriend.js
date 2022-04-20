let friendList =["jawad","farhana","kudratul","ajmol","ahid","pia","hadi"] 

let nameLength =[];

function tinyFriend(tinyFriendArray){
    
    for(let i = 0; i < tinyFriendArray.length; i++){
        let element = tinyFriendArray[i].length             //findout all name lenthe
        nameLength.push(element)                            //all name lenth pushing in nameLenth array serialy As if everyone's index is stay serially
    }
    let lowestLenth = Math.min(...nameLength);              //lowest number ber kora mane lowest lenth er name pawa

    let indexNumberOfName = nameLength.indexOf(lowestLenth);    //lowest Lenth er index number ber kora hoyeche

    return friendList[indexNumberOfName];                   //friendList-e oi index-e je name ache sheta show korbe
}
let result = tinyFriend(friendList);
console.log(result);