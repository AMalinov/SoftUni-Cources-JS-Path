function lastKNumbersSequence(n, k) {

    // create variable to hold result, starting with 1

    let result = [1];

    // repeat n times

    for (let i = 1; i < n; i++) {
        // - calculate next element
        // -- slice from result 'k' elements from the end
        // -- sum sliced elements
        let elements = result.slice(-k);
        let current = 0;
        for(let num of elements){
            current += num;
        }
        
        // - store element
        result.push(current);
    }

    //print result

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(20, 10);