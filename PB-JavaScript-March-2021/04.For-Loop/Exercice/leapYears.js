function leapYears(input){

    let leap = Number(input[0]);
    let rand = Number(input[1]);

    for(i = leap; i <= rand; i += 4){
        console.log(i);
    }
}

leapYears(["1584", "1597"]);