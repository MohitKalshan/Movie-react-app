//actions are JSON objects
//  {
//     type: 'ADD_MOVIES'
//     movies:[],
//  }

// Action types
export const ADD_MOVIES = 'ADD_MOVIES';
// Action Creator functions
export function addMovies(movies) {
    return{
        type: 'ADD_MOVIES',
        movies  //short hand of movies:movies
    }
}