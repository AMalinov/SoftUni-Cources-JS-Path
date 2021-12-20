function sumFirstAndLast(numsAsString) {

    // let first, last;
    // if(numsAsString.length === 1){
    //     first = Number(numsAsString[0]);
    //     last = Number(numsAsString[0]);
    // } else {
    //     first = Number(numsAsString.shift());
    //     last = Number(numsAsString.pop());
    // }


    let first = Number(numsAsString.shift());
    let last = Number(numsAsString.pop());



    return first + last;
}

console.log(sumFirstAndLast(['5', '10']));
console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['40']));