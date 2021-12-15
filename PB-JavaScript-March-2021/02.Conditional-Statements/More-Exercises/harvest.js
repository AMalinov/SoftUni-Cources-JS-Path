function harvest(input){
    let squareM = Number(input[0]);
    let grapePerSqrtM = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrape = squareM * grapePerSqrtM;
    let wine = (totalGrape * 0.4) / 2.5;

    if(wine >= wineNeeded){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - wineNeeded)} liters left -> ${Math.ceil((wine - wineNeeded) / workers)} liters per person.`);
    }else{
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wine)} liters wine needed.`)
    }
}

harvest(["1020", "1.5", "425", "4"]);