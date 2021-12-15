function traveling(input) {

    let index = 0;

    let command = input[index];
    index++;

    while(command !== "End"){

        let money = 0;
        let moneyNeeded = Number(input[index]);
        index++;
        while(money < moneyNeeded){
            let moneyToSave = Number(input[index]);
            index++;
            money += moneyToSave;
        }
        console.log(`Going to ${command}!`);
        command = input[index];
        index++;
    }
}

traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);