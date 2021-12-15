function examPreparation(input){

    let index = 0;

    let poorGradesCount = Number(input[index]);
    index++;

    let poor = 0;

    let subject = input[index];
    index++;

    let subjectCount = 1;

    let grade = Number(input[index]);
    index++;

    let gradeCount = 1;
    let gradeSum = 0;

    gradeSum += grade;

    while(true){

        if(grade <= 4){

            poor++;
        }

        if(poor >= poorGradesCount){
            console.log(`You need a break, ${poor} poor grades.`);
            break;
        }

        subject = input[index];
        index++;

        let lastProblem = input[index - 3];

        let gradeAvg = gradeSum / gradeCount;
        if(subject === "Enough"){
            console.log(`Average score: ${gradeAvg.toFixed(2)}`);
            console.log(`Number of problems: ${subjectCount}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }

        grade = Number(input[index]);
        index++;
        subjectCount++;
        gradeCount++;
        gradeSum += grade;
    }
}

//examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
//examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
examPreparation(["4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough"]);