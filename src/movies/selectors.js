import moviedb from 'moviedb';


const db = moviedb('ea063f4f9f9c96a700b99b9737a83c80');

export const getMovies = name => db.searchMovie({ query: name }, (err, res) => res);
