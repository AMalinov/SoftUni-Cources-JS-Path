function addAndSubtract(arr){

    let changedSum = 0;
    let originalSum = 0;
    let newNum = 0;

    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];

        if(arr[i] % 2 === 0){
            newNum = arr[i] + i;
            arr[i] = newNum;
        } else {
            newNum = arr[i] - i;
            arr[i] = newNum;
        }

        changedSum += newNum;
    }

    console.log(arr);
    console.log(originalSum);
    console.log(changedSum);
}

addAndSubtract([5, 15, 23, 56, 35]);