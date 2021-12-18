function equalSums(array){


    let hasResult = false;

    for (let i = 0; i < array.length; i++) {
        
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIndex = 0; leftIndex < i; leftIndex++) {
            leftSum += array[leftIndex];
        }

        for (let rightIndex = i + 1; rightIndex < array.length; rightIndex++) {
            rightSum += array[rightIndex];
        }

        if (leftSum === rightSum){
            console.log(i);
            hasResult = true;
            break;
        }
    }

    if(!hasResult){
        console.log('no');
    }
}

equalSums([1, 2, 3, 3]);