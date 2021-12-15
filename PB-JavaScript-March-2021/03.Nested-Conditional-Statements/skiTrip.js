function skiTrip(input) {

    let days = Number(input[0]) - 1;
    let room = input[1];
    let rating = input[2];

    let totalSpend = 0;

    if (room === "room for one person") {
        totalSpend = days * 18.00;

    } else if (room === "apartment") {
        totalSpend = days * 25.00;

        if (days < 10) {
            totalSpend -= totalSpend * 0.30;
        } else if (days >= 10 && days <= 15) {
            totalSpend -= totalSpend * 0.35;
        } else if (days > 15) {
            totalSpend -= totalSpend * 0.50;
        }
    }else if(room === "president apartment"){
        totalSpend = days * 35.00;
        if (days < 10) {
            totalSpend -= totalSpend * 0.10;
        } else if (days >= 10 && days <= 15) {
            totalSpend -= totalSpend * 0.15;
        } else if (days > 15) {
            totalSpend -= totalSpend * 0.20;
        }
    }

    if (rating === "positive") {
        totalSpend += totalSpend * 0.25;
    } else {
        totalSpend -= totalSpend * 0.10;
    }

    console.log(totalSpend.toFixed(2));

}

//skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);