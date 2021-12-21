function bitAtPositionOne(number) {

    let toBinary = ((number >>> 0).toString(2));
    let toArr = toBinary.split('').map(Number);


    console.log(toArr[toArr.length - 2]);
}

bitAtPositionOne(13);