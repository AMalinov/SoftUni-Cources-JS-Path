function transportPrice(input){
    let nKm = Number(input[0]);
    let dayOrNight = input[1];

    if(nKm < 20){
        if(dayOrNight === "day"){
            console.log(`${(0.70 + nKm * 0.79).toFixed(2)}`);
        }else{
            console.log(`${(0.70 + nKm * 0.90).toFixed(2)}`)
        }
    }else if(nKm >= 20 && nKm < 100){
        console.log(`${(nKm * 0.09).toFixed(2)}`);
    }else{
        console.log(`${(nKm * 0.06).toFixed(2)}`);
    }
}

transportPrice(["5", "day"]);
transportPrice(["7", "night"]);
transportPrice(["180", "night"]);