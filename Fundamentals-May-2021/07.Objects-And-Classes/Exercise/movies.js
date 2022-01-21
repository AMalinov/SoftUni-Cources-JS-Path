function movies(inputList) {
    let moviesList = [];

    for (let command of inputList) {
        let tokens = command.split(' ');

        if(command.includes('addMovie')) {
            let[addMovieCommand, ...movieName] = command.split(' ');
            let movieNameAsString = movieName.join(' ');

            let movieObj = {
                name: movieNameAsString,
            };

            moviesList.push(movieObj);

        } else if(command.includes('directedBy')) {
            let tokens = command.split(' directedBy ');
            let movieName = tokens[0];
            let directorName = tokens[1];

            let movie = moviesList.find(x => x.name === movieName);
            if(movie) {
                movie.director = directorName;
            }

        } else {
            let tokens = command.split(' onDate ');
            let movieName = tokens[0];
            let date = tokens[1];

            let movie = moviesList.find(x => x.name === movieName);
            if(movie) {
                movie.date = date;
            }
        }
    }

    for(let movie of moviesList) {
        if(movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);