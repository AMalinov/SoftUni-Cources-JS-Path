function vacation(input) {

    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;

    let spendCount = 0;
    let daysCount = 0;

    let moneyCurrent = Number(input[index]);
    index++;

    while (true) {
        let action = input[index];
        index++;
        let moneyToSpendOrSave = Number(input[index]);
        index++;
        daysCount++;

        if (action === "save") {
            moneyCurrent += moneyToSpendOrSave;

            spendCount = 0;

            if (moneyCurrent >= moneyNeeded) {
                console.log(`You saved the money for ${daysCount} days.`);
                break;
            }

        } else if (action === "spend") {
            spendCount++;
            moneyCurrent -= moneyToSpendOrSave;
            if (moneyCurrent < 0) {
                moneyCurrent = 0;
            }

            if (spendCount >= 5) {
                console.log(`You can't save the money.`);
                console.log(daysCount);
                break;
            }
        }
    }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
//vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
//vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);