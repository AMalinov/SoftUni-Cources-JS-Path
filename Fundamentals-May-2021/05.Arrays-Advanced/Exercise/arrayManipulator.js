function arrayManipulator(array, commands) {

    for (let command of commands) {
        let tokens = command.split(' ');

        if (tokens[0] === 'add') {
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);

            addElements(index, element);

        } else if (tokens[0] === 'addMany') {

            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let elements = tokens.map(Number);
            array.splice(index, 0, ...elements);

            //console.log(array.join(' '));

        } else if (tokens[0] === 'contains') {
            console.log(array.indexOf(Number(tokens[1])));

        } else if (tokens[0] === 'remove') {
            let index = Number(tokens[1]);
            array.splice(index, 1);

        } else if (tokens[0] === 'shift') {

            let positions = tokens[1];

            for (let i = 1; i <= positions; i++) {
                let first = array.shift();
                array.push(first);
            }
            //console.log(array.join('\n'));
        } else if (tokens[0] === 'sumPairs') {
            let resultArray = [];
            if(array.length % 2 !== 0) {
                array.push(0);
            }
            for (let i = 0; i < array.length - 1; i += 2) {
                let sum = array[i] + array[i + 1];
                resultArray.push(sum);
            }
            array = resultArray;
            //console.log(array.join(' '));
        } else if (tokens[0] === 'print') {
            console.log(`[ ${array.join(', ')} ]`);
            return;
        }
    }

    function addElements(index, element) {
        array.splice(index, 0, element);
    }
}

//arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);