function vegetableMarket(input){

    let vegetablePerKG = Number(input[0]);
    let friutsPerKG = Number(input[1]);
    let vegetableKG = Number(input[2]);
    let friutsKG = Number(input[3]);

    let vegies = vegetablePerKG * vegetableKG;
    let friuts = friutsPerKG * friutsKG;

    let totalEUR = (vegies + friuts) / 1.94;

    console.log(totalEUR.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);