function sortAnarrayBy2Criteria(input) {

    input.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;
    });

    console.log(input.join('\n'));
}

// sortAnarrayBy2Criteria(["alpha", "beta", "gamma"]);

sortAnarrayBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);