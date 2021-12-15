function walkingLast(input){

    // This solution works !!!!!

    let goal = 10000;

    let totalSteps = 0;

    let diff = 0;

    let index = 0;
    let command = input[index];
    index++;

    while(true){
        if(totalSteps >= goal){
            break;
        }else if(command === "Going home"){
            break;
        }
        totalSteps += parseInt(command);
        command = input[index];
        index++;
    }

    if(command === "Going home"){
        command = parseInt(input[index]);
        totalSteps += command;
    }

    diff = Math.abs(totalSteps - goal);

    if(goal > totalSteps){
        console.log(`${diff} more steps to reach goal.`)
    }else{
        console.log(`Goal reached! Good job!`);
        console.log(`${diff} steps over the goal!`);
    }
}

  //walkingLast(["1000",  "1500",  "2000",  "6500"]); 
  //walkingLast(["1500",  "3000",  "250",  "1548",  "2000",  "Going home",  "2000"]); 
  //walkingLast(["1500",  "300",  "2500",  "3000",  "Going home",  "200"]); 
  walkingLast(["125",  "250",  "4000",  "30",  "2678",  "4682"]);