import Navbar from "./Navbar";
import MovieCart from "./MovieCart";
import {data} from "../data"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
      {data.map((movie,index)=>(
        <MovieCart movie={movie} key={`movie${index}`}/>
      ))}
        </div>
      </div>
    </div>
  );
}

export default App;
