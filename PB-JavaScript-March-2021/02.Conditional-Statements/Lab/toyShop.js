function toyShop(input){

    let tripPrice = Number(input[0]);
    let jigsawCount = Number(input[1]);
    let talkingDollsCount = Number(input[2]);
    let stuffedBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let totalToys = jigsawCount + talkingDollsCount + stuffedBearsCount + minionsCount + trucksCount;

    let jigsawPrice = jigsawCount * 2.60;
    let talkingDollsPrice = talkingDollsCount * 3;
    let stuffedBearsPrice = stuffedBearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let totalSumWithoutDiscount = jigsawPrice + talkingDollsPrice + stuffedBearsPrice + minionsPrice + trucksPrice;


    let discountForQuantity = 0;
    
    let totalSum = 0;
    let finalSum = 0;

    if(totalToys >= 50){

        discountForQuantity = totalSumWithoutDiscount * 0.25;

        totalSum = (totalSumWithoutDiscount - discountForQuantity);
        finalSum = totalSum - (totalSum * 0.1);

        if(tripPrice <= finalSum){
            console.log(`Yes! ${(finalSum - tripPrice).toFixed(2)} lv left.`);
        }else{
            console.log(`Not enough money! ${(tripPrice - finalSum).toFixed(2)} lv needed.`);
        }

    }else{

        totalSum = totalSumWithoutDiscount;
        finalSum = totalSum - (totalSum * 0.1);
        
        if(tripPrice <= finalSum){
            console.log(`Yes! ${(finalSum - tripPrice).toFixed(2)} lv left.`);
        }else{
            console.log(`Not enough money! ${(tripPrice - finalSum).toFixed(2)} lv needed.`);
        }

    }
}

toyShop(["320", "8", "2", "5", "5", "1"]);