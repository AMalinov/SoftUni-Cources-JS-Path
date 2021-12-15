function numbersDivisibleBy9(input){

    let numA = Number(input[0]);
    let numB = Number(input[1]);

    let sum = 0;

    for(i = numA; i < numB; i++){
        if(i % 9 === 0){
            sum += i;
        }
    }

    console.log(`The sum: ${sum}`);

    for(i = numA; i < numB; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}

numbersDivisibleBy9(["100", "200"]);