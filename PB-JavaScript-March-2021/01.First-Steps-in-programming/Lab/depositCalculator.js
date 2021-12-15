function depositCalculator(input){

    let totalDeposit = Number(input[0]);
    let timeSpanDeposit = Number(input[1]);
    let interestRate = Number(input[2]);

    let interest = totalDeposit * (interestRate / 100);
    let oneMonthInterest = interest / 12;
    let calcTotalSum = totalDeposit + (timeSpanDeposit * oneMonthInterest);

    console.log(calcTotalSum);
}

depositCalculator(["200", "3", "5.7"]);