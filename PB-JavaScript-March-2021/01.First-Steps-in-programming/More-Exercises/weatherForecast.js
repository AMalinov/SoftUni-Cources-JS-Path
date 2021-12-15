function weatherForecast(input){

    let outside = input[0];

    if(outside === "sunny"){
        console.log("It's warm outside!");
    }
    else{
        console.log("It's cold outside!");
    }
}

weatherForecast(["snowy"]);