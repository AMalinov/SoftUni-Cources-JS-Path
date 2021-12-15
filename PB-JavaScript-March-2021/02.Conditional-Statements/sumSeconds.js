function sumSeconds(input){

    let firstContestantSeconds = Number(input[0]);
    let secondContestantSeconds = Number(input[1]);
    let thirdContestantSeconds = Number(input[2]);

    let totalTime = firstContestantSeconds + secondContestantSeconds + thirdContestantSeconds;

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    } else{
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35", "45", "44"]);