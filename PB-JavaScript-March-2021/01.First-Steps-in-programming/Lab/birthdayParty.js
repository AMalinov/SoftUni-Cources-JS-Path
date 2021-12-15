function birthday(input){
    
    let hallPrice = Number(input[0]);
    let cakePrice = hallPrice * 0.20;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animator = hallPrice / 3;

    let totalPrice = hallPrice + cakePrice + drinksPrice + animator;

    console.log(totalPrice);
}

birthday(["3720"]);