function oldBooks(input) {

    let command = 0;
    let book = input[command];
    command++;
    let bookNext = input[command];
    command++;
    let favoriteBookCount = 0;

    while (bookNext !== "No More Books") {

        if (book !== bookNext) {
            favoriteBookCount++;
        } else {
            console.log(`You checked ${favoriteBookCount} books and found it.`);
            break;
        }

        bookNext = input[command];
        command++;

        if (bookNext === "No More Books") {

            console.log("The book you search is not here!");
            console.log(`You checked ${favoriteBookCount} books.`);

        }
    }
}

oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"]);
