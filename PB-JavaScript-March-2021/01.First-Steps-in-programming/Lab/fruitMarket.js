function fruitMarket(input){

    let strawberryPrice = Number(input[0]);
    let bananasKG = Number(input[1]);
    let orangesKG = Number(input[2]);
    let raspberryKG = Number(input[3]);
    let strawberryKG = Number(input[4]);

    let raspberryPricePerKG = strawberryPrice / 2;
    let orangesPricePerKG = raspberryPricePerKG - (raspberryPricePerKG * 0.4);
    let bananasPricePerKG = raspberryPricePerKG - (raspberryPricePerKG * 0.8);

    let raspberryTotal = raspberryPricePerKG * raspberryKG;
    let orangesTotal = orangesPricePerKG * orangesKG;
    let bananasTotal = bananasPricePerKG * bananasKG;
    let strawberryTotal = strawberryPrice * strawberryKG;

    let totalPrice = raspberryTotal + orangesTotal + bananasTotal + strawberryTotal;

    console.log(totalPrice);

}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);