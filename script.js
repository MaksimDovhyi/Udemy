let numberOffilms  = prompt('Сколько фильмов вы посмотрели?');

let personelMovieDB = {
    count: numberOffilms,
    movies: {},
    actor: {},
    geners: [],
    privat: false
};


let first = prompt('Один из последних ваших фильмов');
let second = prompt('На сколько его оцените');
let first2 = prompt('Один из последних ваших фильмов');
let second2 = prompt('На сколько его оцените');

/*for(i = 0; i < 2; i++){
    let first = prompt('Один из последних ваших фильмов');
    let second = prompt('На сколько его оцените');
};*/

personelMovieDB.movies[first] = second;
personelMovieDB.movies[first2] = second2;
console.log(personelMovieDB);
console.log(movie);
