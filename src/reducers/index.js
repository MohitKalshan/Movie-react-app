// Reducer as pure function
export default function movies(state = [], action) {
  // initial state of movies is empty array
  if (action.type === "ADD_MOVIEs") {
    //action change as intended, not directly
    return action.movies; //return new state, not adding or removing movies
  }
  return state;
}
