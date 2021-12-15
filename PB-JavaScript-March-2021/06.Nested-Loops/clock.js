function clock(){

    //The solution is without the if-else statemant - there is no need to add additional 0 to the minutes that are less than 10...

    for (let h = 0; h <= 23; h++) {
        for (let m = 0; m <= 59; m++) {

            if(m < 10){
                console.log(`${h}:0${m}`)
            }else{
                console.log(`${h}:${m}`);
            }
        }
    }
}

clock();