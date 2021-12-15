function operationsBetweenNumbers(input){

    let numA = Number(input[0]);
    let numB = Number(input[1]);
    let operation = input[2];

    let result = 0;

    if(operation === "+"){
        result = numA + numB;

        if(result % 2 === 0){
            console.log(`${numA} + ${numB} = ${result} - even`);
        }else{
            console.log(`${numA} + ${numB} = ${result} - odd`);
        }
    }else if(operation === "-"){
        result = numA - numB;

        if(result % 2 === 0){
            console.log(`${numA} - ${numB} = ${result} - even`);
        }else{
            console.log(`${numA} - ${numB} = ${result} - odd`);
        }
    }else if(operation === "*"){
        result = numA * numB;

        if(result % 2 === 0){
            console.log(`${numA} * ${numB} = ${result} - even`);
        }else{
            console.log(`${numA} * ${numB} = ${result} - odd`);
        }
    }else if(operation === "/"){
        if(numB === 0){
            console.log(`Cannot divide ${numA} by zero`);
        }else{
            result = numA / numB;
            console.log(`${numA} / ${numB} = ${result.toFixed(2)}`);
        }
    }else if(operation === "%"){
        if(numB === 0){
            console.log(`Cannot divide ${numA} by zero`);
        }else{
            result = numA % numB;
            console.log(`${numA} % ${numB} = ${result}`);
        }
    }
}

operationsBetweenNumbers(["10", "12", "+"]);
operationsBetweenNumbers(["123", "12", "/"]);
operationsBetweenNumbers(["112", "0", "/"]);
operationsBetweenNumbers(["10", "1", "-"]);
operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["10", "0", "%"]);
operationsBetweenNumbers(["7", "3", "*"]);
