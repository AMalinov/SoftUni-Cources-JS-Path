function yardGreening(input){

    let squareMeters = Number(input[0]);

    let priceWithoutDiscount = squareMeters * 7.61;

    let discount = priceWithoutDiscount * 0.18;

    let totalPrice = priceWithoutDiscount - discount;

    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)

}

yardGreening(["550"]);