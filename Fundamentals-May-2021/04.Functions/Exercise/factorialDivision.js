function factorialDivision(numA, numB) {

    function factorial(number) {
        let fact = 1;
        if (number === 0) {
            fact = 1;
        }

        for (let i = 1; i < number; i++) {

            fact *= i + 1;
        }
        return fact;
    }

    function divideFactorials(a, b) {
        return factorial(a) / factorial(b);
    }

    let result = divideFactorials(numA, numB);
    console.log(result.toFixed(2));
}

factorialDivision(6, 2);