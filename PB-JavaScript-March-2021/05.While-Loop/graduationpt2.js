function graduationpt2(input){

    let index = 0;
    let student = input[index];

    index++;

    let gradesSum = 0;
    let gradesCount = 0;
    let excludedCount = 0;
    let average = 0;

    while(index < 13){
        let grade = parseFloat(input[index]);
        index++;
        gradesCount++;

        gradesSum += grade;

        if(grade < 4){
            excludedCount++;
        }

        if(excludedCount >= 2){
            console.log(`${student} has been excluded at ${gradesCount - 1} grade`);
            break;
        }else if(index === 13){

            average = gradesSum / gradesCount;
            console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
        }
    }
}

//66.41

graduationpt2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);