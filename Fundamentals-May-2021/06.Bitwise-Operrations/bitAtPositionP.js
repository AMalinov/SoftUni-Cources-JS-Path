function bitAtPositionP(number, position) {

    let toBinary = ((number >>> 0).toString(2));
    let toArr = toBinary.split('').map(Number);
    let pos = toArr.length - position;

    console.log(toArr[pos - 1]);
}

bitAtPositionP(2145, 5);
// bitAtPositionP(512, 0);