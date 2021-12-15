function tournamentOfChristmas(input){
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalMoney = 0;
    let totalWin = 0;
    let totalLose = 0;


    for(let i = 1; i <= days; i++){
        let command = input[index];
        index++;
        let tempMoney = 0;
        let tempWin = 0;
        let tempLose = 0;
        while(command !== "Finish"){
            let sportName = command;
            let result = input[index];
            index++;
            if(result === "win"){
                tempMoney += 20;
                tempWin++;
            }else{
                tempLose++;
            }
            command = input[index];
            index++;
        }

        if(tempWin > tempLose){
            tempMoney *= 1.10;
            totalWin++;
        }else{
            totalLose++;
        }
        totalMoney += tempMoney;
    }
    if(totalWin > totalLose){
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);