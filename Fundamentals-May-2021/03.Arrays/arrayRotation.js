function arrayRotation(array, rotations){

    // while(rotations > 0){
    //     array.push(array.shift());
    //     rotations--;
    // }

    for (let i = 0; i < rotations; i++) {
        let firstElement = array[0];

        for (let j = 0; j < array.length; j++) {
            array[j] = array[j + 1];
        }

        let lastIndex = array.length - 1;
        array[lastIndex] = firstElement;
        
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

console.log('-----------');

arrayRotation([32, 21, 61, 1], 4);

console.log('-----------');

arrayRotation([2, 4, 15, 31], 5);