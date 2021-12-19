function simpleCalculator(numA, numB, operation) {

    let multiply = (numA, numB) => numA * numB;
    let divide = (numA, numB) => numA / numB;
    let add = (numA, numB) => numA + numB;
    let subtract = (numA, numB) => numA - numB;

    let result;

    switch (operation) {
        case 'multiply':
            result = multiply(numA, numB);
            break;
        case 'divide':
            result = divide(numA, numB);
            break;
        case 'add':
            result = add(numA, numB);
            break;
        case 'subtract':
            result = subtract(numA, numB);
            break;
    }

    console.log(result);
}

// simpleCalculator(1,2, 'add');
simpleCalculator(50,13, 'substract');
// simpleCalculator(2,2, 'multiply');
// simpleCalculator(10,2, 'divide');