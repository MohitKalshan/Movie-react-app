import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import {data} from "../data"

function App() {
  return (
    <div className="App">
      <Navbar />
      hello
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
      {data.map(movie=>(
        <MovieCart movie={movie}/>
      ))}
        </div>
      </div>
    </div>
  );
}

export default App;
