function processOddNumbers(arr) {

    let predicate = (x, i) => i % 2 == 1;
    let filtered = arr.filter(predicate);

    let operation = x => x * 2;

    let mapped = filtered.map(operation);

    mapped.reverse();
    
    console.log(mapped.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);