function charityCampaign(input){

    let campaignDays = Number(input[0]);
    let workers = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancake = Number(input[4]);

    let cakesPerWorker = cakes * 45;
    let wafflesPerWorker = waffles * 5.80;
    let pancakePerWorker = pancake * 3.20;

    let totalSumPerDay = (cakesPerWorker + wafflesPerWorker + pancakePerWorker) * workers;
    let totalSumCampaign = totalSumPerDay * campaignDays;

    let sumAtTheEnd = totalSumCampaign - (totalSumCampaign / 8);

    console.log(sumAtTheEnd);

}

charityCampaign(["23", "8", "14", "30", "16"])