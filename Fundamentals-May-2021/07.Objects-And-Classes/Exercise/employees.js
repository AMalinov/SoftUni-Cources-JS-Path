function employees(input) {

    //let employeesData = {};

    for (let name of input) {
        let employeesData = {
            employeeName : name,
            personalNumber : name.length,
        };

        console.log(`Name: ${employeesData.employeeName} -- Personal Number: ${employeesData.personalNumber}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);