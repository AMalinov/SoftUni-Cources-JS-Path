function vacantion(input){

    let pageCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysTarget = Number(input[2]);

    let totalTimeToRead = pageCount / pagesPerHour;
    let timeToRead = totalTimeToRead / daysTarget;

    console.log(timeToRead);

}

vacantion(["212", "20", "2"]);