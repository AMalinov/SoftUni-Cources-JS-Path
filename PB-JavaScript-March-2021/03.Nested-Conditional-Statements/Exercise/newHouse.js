function newHouse(input){

    let typeFlowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let rosesPrice = 5 * flowersCount;
    let dahliasPrice = 3.80 * flowersCount;
    let tulipsPrice = 2.80 * flowersCount;
    let narcissusPrice = 3 * flowersCount;
    let gladiolusPrice = 2.5 * flowersCount;
    let sum = 0;

    if(typeFlowers === "Roses"){
        if(flowersCount > 80){
            rosesPrice -= (rosesPrice * 0.10);
        }
        sum = rosesPrice;
    }else if(typeFlowers === "Dahlias"){
        if(flowersCount > 90){
            dahliasPrice -= (dahliasPrice * 0.15);
        }
        sum = dahliasPrice;
    }else if(typeFlowers === "Tulips"){
        if(flowersCount > 80){
            tulipsPrice -= (tulipsPrice * 0.15);
        }
        sum = tulipsPrice;
    }else if(typeFlowers === "Narcissus"){
        if(flowersCount < 120){
            narcissusPrice += (narcissusPrice * 0.15);
        }
        sum = narcissusPrice;
    }else if(typeFlowers === "Gladiolus"){
        if(flowersCount < 80){
            gladiolusPrice += (gladiolusPrice * 0.20);
        }
        sum = gladiolusPrice;
    }

    if(budget >= sum){
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${Math.abs(budget - sum).toFixed(2)} leva left.`)
    }else{
        console.log(`Not enough money, you need ${Math.abs(budget - sum).toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);
