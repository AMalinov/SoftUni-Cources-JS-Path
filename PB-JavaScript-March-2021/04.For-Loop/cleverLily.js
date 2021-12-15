function cleverLily(input){

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let evenDayDayCount = 0;
    let toysCount = 0;
    let money = 0;

    for(i = 1; i <= age; i++){
        if(i % 2 === 0){
            evenDayDayCount++;
            money += 10 * evenDayDayCount;
        }else{
            toysCount++;
        }
    }

    let totalMoney = (money - evenDayDayCount) + (toyPrice * toysCount);

    if(totalMoney >= washingMachinePrice){
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${Math.abs(totalMoney - washingMachinePrice).toFixed(2)}`);
    }
}

cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"]);
