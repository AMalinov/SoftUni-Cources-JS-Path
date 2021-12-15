function fishTank(input){
    let lenghtFishTank = Number(input[0]);
    let widthFishTank = Number(input[1]);
    let heightFishTank = Number(input[2]);
    let percentFillings = Number(input[3]);

    let volumeFishTank = lenghtFishTank * widthFishTank * heightFishTank;
    let totalLiters = volumeFishTank * 0.001;
    let finalLitters = totalLiters - (totalLiters * (percentFillings * 0.01));

    console.log(finalLitters);
}

fishTank(["85", "75", "47", "17"]);