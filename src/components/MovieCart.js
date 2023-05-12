import React, { Component } from "react";
import { addFavourite } from "../action";

export default class MovieCart extends Component {
  handleFavoriteClick = () => {
    const movie = this.props;
    this.props.dispatch(addFavourite(movie));
  };
  handleUnfavoriteClick = () => {

  };
  render() {
    const { movie, isfavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="Movie-Poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isfavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavoriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavoriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
