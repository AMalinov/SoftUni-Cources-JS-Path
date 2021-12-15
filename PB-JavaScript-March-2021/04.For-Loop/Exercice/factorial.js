function factorial(input){

    let num = Number(input[0]);

    let temp = 1;

    for(i = 1; i <= num; i++){

        let fact = temp * i;
        temp = fact;

    }

    console.log(temp);
}

factorial(["8"]);