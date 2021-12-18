function commonElements(arrayA, arrayB){

    //let match = '';

    for (let a = 0; a < arrayA.length; a++) {

        for (let b = 0; b < arrayB.length; b++) {

            if(arrayA[a] === arrayB[b]){
                // match += arrayA[a];
                console.log(arrayA[a]);
                continue;
            }
            
        }
        
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

console.log('---------------');

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);