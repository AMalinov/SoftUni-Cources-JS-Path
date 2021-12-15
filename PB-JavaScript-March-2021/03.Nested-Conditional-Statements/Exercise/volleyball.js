function volleyball(input){

    let year = input[0];
    let holidays = Number(input[1]);
    let weeksAway = Number(input[2]);

    let weeksInSofia = 48 - weeksAway;
    let gamesInSofia = weeksInSofia * (3 / 4);
    let gamesAway = weeksAway;
    let gamesInHolidays = holidays * (2 / 3);

    let totalGames = gamesInSofia + gamesAway + gamesInHolidays;

    if(year === "leap"){
        totalGames += totalGames - (totalGames * 0.85);
    }

    console.log(Math.floor(totalGames));
}

//volleyball(["leap", "5", "2"]);
volleyball(["normal", "3", "2"]);