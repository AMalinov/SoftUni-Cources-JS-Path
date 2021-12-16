function printAndSum(start, end){

    let sum = 0;

    let resultNum = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        resultNum += i + " ";
    }

    console.log(resultNum);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);