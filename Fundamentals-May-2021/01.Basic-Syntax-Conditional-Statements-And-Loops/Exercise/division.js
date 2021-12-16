function division(number){

    let biggerDivision = 0;

    let divisible = false;

    if(number % 2 === 0){
        divisible = true;
        biggerDivision = 2;
    }
    if(number % 3 === 0){
        divisible = true;
        biggerDivision = 3;
    }
    if(number % 6 === 0){
        divisible = true;
        biggerDivision = 6;
    }
    if(number % 7 === 0){
        divisible = true;
        biggerDivision = 7;
    }
    if(number % 10 === 0){
        divisible = true;
        biggerDivision = 10;
    }

    if(divisible){
        console.log(`The number is divisible by ${biggerDivision}`);
    }else{
        console.log("Not divisible")
    }
}

division(30);
division(15);
division(12);
division(1643);