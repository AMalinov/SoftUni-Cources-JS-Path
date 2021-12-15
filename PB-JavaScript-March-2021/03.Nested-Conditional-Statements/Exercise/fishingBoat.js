function fishingBoat(input){

    let budget = Number(input[0]);
    let season = input[1];
    let peopleCount = Number(input[2]);

    let rent = 0;

    switch (season) {
        case "Spring": rent = 3000; break;
        case "Summer":
        case "Autumn": rent = 4200; break;
        case "Winter": rent = 2600;
    }

    

     if(peopleCount <= 6){
         rent = rent - (rent * 0.10);

     }else if(peopleCount >= 7 && peopleCount <= 11){

        rent = rent - (rent * 0.15);
     }else{

        rent = rent - (rent * 0.25);
     }

     if(peopleCount % 2 === 0 && season !== "Autumn"){
         rent = rent - (rent * 0.05);
     }
     
     if(budget >= rent){
         console.log(`Yes! You have ${Math.abs(budget - rent).toFixed(2)} leva left.`)
     }else{
         console.log(`Not enough money! You need ${Math.abs(budget - rent).toFixed(2)} leva.`)
     }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
fishingBoat(["2000", "Winter", "13"]);