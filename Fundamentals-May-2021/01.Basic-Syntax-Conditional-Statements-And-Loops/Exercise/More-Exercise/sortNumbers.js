function sortNumbers(numA, numB, numC) {

    let test = [numA, numB, numC];

    let result = test.sort((a,b) => b - a);

    for (const num of test) {
        console.log(num);
    }
}

sortNumbers(2,1,3);