function bombNumbers(array, bomb) {

    let power = bomb.shift();
    let range = bomb.shift();

    let sum = 0;

    while(array.includes(power)) {
        let index = array.indexOf(power);
        let toRemove = range * 2 + 1;
        let startIndex = index - range;

        if(startIndex < 0) {
            toRemove += startIndex;
            startIndex = 0;
        }

        array.splice(startIndex, toRemove);
    }

    for (const el of array) {
        sum += el;
    }
    console.log(sum);
}

//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);