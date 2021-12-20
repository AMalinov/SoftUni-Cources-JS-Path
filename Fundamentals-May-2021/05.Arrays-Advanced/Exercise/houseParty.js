function houseParty(commands) {

    let isGoing = 3;
    let partyPeople = [];

    for (let i = 0; i < commands.length; i++) {

        let tokens = commands[i].split(' ');
        let person = tokens[0];

        if (tokens.length <= isGoing) {
            if (partyPeople.includes(person)) {
                console.log(`${person} is already in the list!`);
            } else {
                partyPeople.push(person);
            }
        } else {

            if (partyPeople.includes(person)) {
                partyPeople.splice(partyPeople.indexOf(person), 1);
            } else {
                console.log(`${tokens[0]} is not in the list!`);
            }
        }
    }
    console.log(partyPeople.join('\n'));
}

// houseParty(['Allie is going!',
// 'George is going!',
// 'John is not going!',
// 'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);