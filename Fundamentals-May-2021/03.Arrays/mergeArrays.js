function mergeArrays(arrayA, arrayB){

    let newArray = [];

    for (let a = 0; a < arrayA.length; a++) {
        if(a % 2 === 0){
            let addNums = Number(arrayA[a]) + Number(arrayB[a]);
            newArray.push(addNums);
        }else {
            newArray.push(arrayA[a] + arrayB[a]);
        }
    }

    console.log(newArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);