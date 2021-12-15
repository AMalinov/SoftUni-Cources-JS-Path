function godzillaVsKong(input){

    let filmBudget = Number(input[0]);
    let workersCount = Number(input[1]);
    let clothingForOneWorker = Number(input[2]);

    let decor = filmBudget * 0.1;
    let clothinsForAllWorkers = workersCount * clothingForOneWorker;

    let totalMoney = decor + clothinsForAllWorkers;

    if(workersCount > 150){
        totalMoney = decor + (clothinsForAllWorkers - (clothinsForAllWorkers * 0.1));
    }

    if(totalMoney <= filmBudget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - totalMoney).toFixed(2)} leva left.`);
    }else{
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalMoney - filmBudget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["15437.62", "186", "57.99"]);