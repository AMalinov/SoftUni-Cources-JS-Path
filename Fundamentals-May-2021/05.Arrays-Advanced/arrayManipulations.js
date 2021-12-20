function arrayManipulations(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

        for (let i = 0; i < commands.length; i++) {
            let [command, firstNum, secondNum] = commands[i].split(' ');

            firstNum = Number(firstNum);
            secondNum = Number(secondNum);

            switch (command) {
                case "Add":
                    addElement(firstNum);
                    break;
                case "Remove":
                    removeElement(firstNum);
                    break;
                case "RemoveAt":
                    removeElementAt(firstNum);
                    break;
                case "Insert":
                    insert(firstNum, secondNum);
                    break;
            }
            
        }

        console.log(arr.join(' '));

        function addElement(element) {
            arr.push(element);
        }

        function removeElement(element) {
            arr = arr.filter(elem => elem !== element);
        }

        function removeElementAt(index) {
            arr.splice(index, 1);
        }

        function insert(num, index) {
            arr.splice(index, 0, num);
        } 
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);