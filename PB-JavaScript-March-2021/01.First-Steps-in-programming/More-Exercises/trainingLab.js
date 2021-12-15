function trainingLab(input){
    let widthInMeters = Number(input[0]);
    let heightInMeters = Number(input[1]);

    let widthInCM = widthInMeters * 100;
    let heightInCM = heightInMeters * 100;

    // Width 

    let workStationsWidth = parseInt((heightInCM - 100) / 70);

    //----#-----

    // Height

    let workStationsHeight = parseInt(widthInCM / 120);

    //----#----

    let stationsCount = workStationsWidth * workStationsHeight - 3;

    console.log(stationsCount);

}

trainingLab(["15", "8.9"]);