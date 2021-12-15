function petShop(input){

    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);

    let totalFoodPrice = (dogs * 2.50) + (otherAnimals * 4);

    console.log(`${totalFoodPrice} lv.`);

}

petShop(["13" , "9"]);