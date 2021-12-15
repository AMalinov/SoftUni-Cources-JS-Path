function cinema(input){

    let type = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    let totalTickets = row * col;

    let totalMoney = 0.0;

    switch (type) {
        case "Premiere": totalMoney += (totalTickets * 12.00); break;
        case "Normal": totalMoney += (totalTickets * 7.50); break;
        case "Discount": totalMoney += (totalTickets * 5.00); break;
        default:
            break;
    }

    console.log(`${totalMoney.toFixed(2)} leva`);
}

cinema(["Normal", "21", "13"]);