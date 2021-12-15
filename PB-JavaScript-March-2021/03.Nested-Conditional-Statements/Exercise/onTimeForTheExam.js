function onTimeForTheExam(input){

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let ariveHour = Number(input[2]);
    let ariveMinute = Number(input[3]);

    let examTotal = examHour * 60 + examMinute;
    let ariveTotal = ariveHour * 60 + ariveMinute;


    if(ariveTotal > examTotal){
        console.log("Late");
    }else if(Math.abs(ariveTotal - examTotal) <= 30){
        console.log("On time");
    }else{
        console.log("Early");
    }

    let diffMin = Math.abs(examTotal - ariveTotal);

    if((examTotal - ariveTotal) > 0){
        if(diffMin < 60){
            console.log(`${diffMin} minutes before the start`);
        }else{
            if(diffMin % 60 < 10){
                console.log(`${parseInt(diffMin / 60)}:0${(diffMin % 60)} hours before the start`);
            }else{
                console.log(`${parseInt(diffMin / 60)}:${(diffMin % 60)} hours before the start`);
            }
        }
    }else if((ariveTotal - examTotal) > 0){
        if(diffMin < 60){
            console.log(`${diffMin} minutes after the start`);
        }else{
            if(diffMin % 60 < 10){
                console.log(`${parseInt(diffMin / 60)}:0${(diffMin % 60)} hours after the start`);
            }else{
                console.log(`${parseInt(diffMin / 60)}:${(diffMin % 60)} hours after the start`);
            }
        }
    }
}

//onTimeForTheExam(["9", "30", "9", "50"]);
//onTimeForTheExam(["9", "00", "8", "30"]);
//onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
