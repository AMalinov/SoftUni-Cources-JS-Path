function greaterNumber(input){
    let numberA = Number(input[0]);
    let numberB = Number(input[1]);

    if(numberA >= numberB){
        console.log(numberA);
    }else{
        console.log(numberB);
    }
}

greaterNumber(["10", "10"]);