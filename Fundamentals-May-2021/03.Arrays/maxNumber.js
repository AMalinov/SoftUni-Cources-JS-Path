function maxNumber(array){

    let maxNums = [];

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {

            let nextNumber = array[j];
            
            if (nextNumber >= currentNum){
                isTop = false;
                break;
            }
        }

        if (isTop) {
            maxNums.push(currentNum);
        }
    }

    console.log(maxNums.join(' '));
}

// maxNumber([1, 4, 3, 2]);
// console.log('------------');
maxNumber([14, 24, 3, 19, 15, 17]);
// console.log('------------');
// maxNumber([41, 41, 34, 20]);
