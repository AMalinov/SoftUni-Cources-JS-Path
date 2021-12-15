function worldSwimmingRecord(input){
    let recordInSec = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecFor1Meter = Number(input[2]);

    let time = distanceInMeters * timeInSecFor1Meter;
    let every15MetersDelay = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = time + every15MetersDelay;

    if(recordInSec <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"]);