//actions are JSON objects
//  {
//     type: 'ADD_MOVIES'
//     movies:[],
//  }

// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
// Action Creator functions
export function addMovies(movies) {
    return{
        type: 'ADD_MOVIES',
        movies  //short hand of movies:movies
    }
}
export function addFavourite(movie) { //movies is object 
    return{
        type: 'ADD_FAVOURITE',
        movie  //short hand of movie:movie
    }
}