function timePlus15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalTimeInMinutes = (hours * 60) + minutes;
    let totalTimePlus15Minutes = totalTimeInMinutes + 15;

    let finalHour = Math.floor(totalTimePlus15Minutes / 60).toFixed(0);
    let finalMinutes = totalTimePlus15Minutes % 60;

    if(finalHour >= 24){
        finalHour -= 24;
    }

    if(finalMinutes < 10){
        console.log(`${finalHour}:0${finalMinutes}`);
    }else{
        console.log(`${finalHour}:${finalMinutes}`);
    }

}

timePlus15Minutes(["8", "30"]);