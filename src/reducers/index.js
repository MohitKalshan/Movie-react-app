import { ADD_MOVIES, ADD_FAVOURITE } from "../action";

const initialMoviesState = {
  list: [],
  favourites: [],
};
// Reducer as pure function
export default function movies(state = initialMoviesState, action) {
  // // initial state of movies is empty array
  // if (action.type === ADD_MOVIES) {
  //   //action change as intended, not directly
  //   //return new state, not adding or removing movies
  //   return {
  //     // return new state - new object
  //     ...state, //shallow copy of state param using spread operator
  //     list: action.movies,
  //   };
  // }
  // return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    default:
      return state;
  }
}
