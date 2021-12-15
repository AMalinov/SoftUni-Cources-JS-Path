function sleepyTomCat(input){
    let daysOff = Number(input[0]);

    let workDaysPlay = 63;
    let daysOffPlay = 127;
    let year = 365;

    let playTimeDaysOff = daysOff * daysOffPlay;
    let playTimeWorkDays = (year - daysOff) * workDaysPlay;

    let totalMinutesPlayTime = playTimeDaysOff + playTimeWorkDays;

    let totalTime = 30000 - totalMinutesPlayTime;

    let totalPlayTimeHours = Math.trunc(totalTime / 60);
    let totalPlayTimeMinutes = totalTime % 60;

    if(totalMinutesPlayTime > 30000){
        console.log("Tom will run away");
        console.log(`${Math.abs(totalPlayTimeHours)} hours and ${Math.abs(totalPlayTimeMinutes)} minutes more for play`);
    }else{
        console.log("Tom sleeps well");
        console.log(`${totalPlayTimeHours} hours and ${totalPlayTimeMinutes} minutes less for play`);
    }
}

sleepyTomCat(["113"]);