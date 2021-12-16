function distanceBetweenPoints(xA, xB, yA, yB){

    // let a = xA - xB;
    // let b = yA - yB;

    let result = Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2);

    console.log(result);
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);