function nextDay(year, month, day){

    let result = new Date(year, month, day);
    //console.log(result);

    let tomorrow = new Date(result);
    tomorrow.setDate(result.getDate() + 3);

    console.log(tomorrow);
}

nextDay(2016, 9, 30);