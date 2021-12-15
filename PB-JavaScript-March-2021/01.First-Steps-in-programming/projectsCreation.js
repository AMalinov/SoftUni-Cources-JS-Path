function projectsCreation(input){
    
    let architectName = input[0];
    let projects = Number(input[1]);
    let totalTimeToFinish = projects * 3;
    
    console.log(`The architect ${architectName} will need ${totalTimeToFinish} hours to complete ${projects} project/s.`)

}

projectsCreation(["Malinov", "4"]);