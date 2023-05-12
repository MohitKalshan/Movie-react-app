import { Component } from "react";
import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import { data } from "../data";
import { addMovies } from "../action";

class App extends Component {
  componentDidMount() {
    const {store} = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log('State: ',store.getState());
  }
  // isMovieFavorite(movie) {
  //   const {favorites}= this.props.store.getState();
  //   const index = favorites.indexOf(movie);
  //   if (index !== -1){
  //     // Movie found
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    const {list} = this.props.store.getState();
    console.log("Render: ",this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => (
              <MovieCart 
              movie={movie} 
              key={`movie${index}`} 
              dispatch={this.props.store.dispatch} 
              // isMovieFavorite={this.isMovieFavorite(movie)} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
