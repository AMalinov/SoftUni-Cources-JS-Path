function addAndSubstract(numA, numB, numC){

    function add(numA, numB){
        let result = numA + numB;
        return result;
    }

    function subtract(sumNums, numC){
        let result = sumNums - numC;
        return result;
    }

    let addedNums = add(numA, numB);
    let finalResult = subtract(addedNums, numC);
    
    return finalResult;
}


let result = addAndSubstract(23, 6, 10);
console.log(result);