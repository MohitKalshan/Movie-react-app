import { Component } from "react";
import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import { data } from "../data";

class App extends Component {
  componentDidMount() {
    const {store} = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    })
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log('State: ',store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCart movie={movie} key={`movie${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
