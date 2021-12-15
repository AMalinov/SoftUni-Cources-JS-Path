function scholarship(input){

    let incomBGN = Number(input[0]);
    let avaregeGrade = Number(input[1]);
    let minSalary = Number(input[2]);

    let socialScgolarship = 0;
    let excellentScgolarship = 0;

    // if(incomBGN > minSalary && avaregeGrade < 5.50){

    //     console.log("You cannot get a scholarship!");
    // }

    // if((incomBGN < minSalary && avaregeGrade > 4.5) && (socialScgolarship > excellentScgolarship)){

    //     console.log(`You get a Social scholarship ${socialScgolarship} BGN`);

    // }else if((avaregeGrade >= 5.5) && (excellentScgolarship >= socialScgolarship) || (incomBGN <= minSalary)){

    //     console.log(`You get a scholarship for excellent results ${excellentScgolarship} BGN`);
    // }

    if (incomBGN < minSalary) {
        socialScgolarship = minSalary * 0.35;
    }
 
    if (avaregeGrade >= 5.5) {
        excellentScgolarship = avaregeGrade * 25;
    }
 
    if (minSalary<incomBGN&& avaregeGrade<5.5) {
        console.log("You cannot get a scholarship!");
    } else if (socialScgolarship > excellentScgolarship && avaregeGrade > 4.5) {
        console.log(`You get a Social scholarship ${Math.floor(socialScgolarship)} BGN`);
    } else if (socialScgolarship <= excellentScgolarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScgolarship)} BGN`)
    }
}

scholarship(["300.00",
"5.65",
"420.00"]);