let numberOffilms  = prompt('Сколько фильмов вы посмотрели?');

let personelMovieDB = {
    count: numberOffilms,
    movies: {},
    actor: {},
    geners: [],
    privat: false
};


/*let a = prompt('Один из последних ваших фильмов');
let b = prompt('На сколько его оцените');
let c = prompt('Один из последних ваших фильмов');
let d = prompt('На сколько его оцените');*/

for(i = 0; i < 2; i++){
    let a = prompt('Один из последних ваших фильмов');
    let b = prompt('На сколько его оцените');
    if(a === " " || a === null || a.length > 50 || b === " " || b === null || b.length > 50){
    i--
    }else{
    personelMovieDB.movies[a] = b;
    }
};


//personelMovieDB.movies[c] = d//;
console.log(personelMovieDB);

