function coins(input){

    let num = Number(input[0]) * 100;

    let coinsCount = 0;

    while(num !== 0){
        if(num >= 200){
            coinsCount++;
            num -= 200;
        }else if(num >= 100){
            coinsCount++;
            num -= 100;
        }else if(num >= 50){
            coinsCount++;
            num -= 50;
        }else if(num >= 20){
            coinsCount++;
            num -= 20;
        }else if(num >= 10){
            coinsCount++;
            num -= 10;
        }else if(num >= 5){
            coinsCount++;
            num -= 5;
        }else if(num >= 2){
            coinsCount++;
            num -= 2;
        }else if (num >= 1){
            coinsCount++
            num -= 1;
        }else{
            break;
        }
    }
        console.log(coinsCount);
}

coins(["2"]);