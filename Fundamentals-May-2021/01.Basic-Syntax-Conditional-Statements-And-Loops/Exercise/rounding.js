function rounding(num, percision){

    if(percision > 15){
        percision = 15;
    }

    console.log(parseFloat(num.toFixed(percision)));
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);