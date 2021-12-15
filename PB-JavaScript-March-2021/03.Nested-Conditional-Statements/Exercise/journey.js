function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let moneySpend = 0;

    if(budget <= 100){

        if(season === "summer"){
            moneySpend = budget * 0.30;

            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${moneySpend.toFixed(2)}`);
        }else{
            moneySpend = budget * 0.70;

            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${moneySpend.toFixed(2)}`);
        }
    }

    if(budget <= 1000 && budget > 100){

        if(season === "summer"){
            moneySpend = budget * 0.40;
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${moneySpend.toFixed(2)}`);
        }else{
            moneySpend = budget * 0.80;
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${moneySpend.toFixed(2)}`);
        }
    }

    if(budget > 1000){
        moneySpend = budget * 0.90;
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${moneySpend.toFixed(2)}`);
    }
}

journey(["50", "summer"]);
//journey(["75", "winter"]);
//journey(["312", "summer"]);
//journey(["678.53", "winter"]);
//journey(["1500", "summer"]);
