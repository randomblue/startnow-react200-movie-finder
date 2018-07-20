import React from "react";
import { movieTitleSearch, findMovie } from "./MovieSearchAction";

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.toBeyonceOrNot = this.toBeyonceOrNot.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(movieTitleSearch(value));
  }

  handleOnClick(event) {
    event.preventDefault();
    const { movieTitle, dispatch } = this.props;
    dispatch(findMovie(movieTitle));
  }

  render() {
    const { movieTitle, movieData } = this.props;
    console.log(movieData);
    return (
      <div className="container">
        {/* Search Bar */}
        <div className="input-group mb-3">
          <input
            type="text submit"
            className="form-control"
            placeholder="Search Movies"
            aria-label="Search Movies"
            aria-describedby="basic-addon2"
            onChange={this.handleInputChange}
            value={movieTitle}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button submit"
              onClick={this.handleOnClick}
            >
              GO!
            </button>
          </div>
        </div>

        {/* Movie List */}
        <div>
          {movieData.map(movieInfo => {
            return (
              <div className="card" key={movieInfo.imdbID}>
                <div className="card-body row">
                  {/* image */}
                  <div key={movieInfo.imdbID} className="col col-4">
                    {movieInfo.Poster === "N/A" ? (
                      <img
                        className=""
                        src="https://i.pinimg.com/originals/af/ee/e5/afeee5509eb93f87bea459ccc8ddcae1.jpg"
                        alt="placeholder"
                        width="200"
                        height="275"
                      />
                    ) : (
                      <img
                        className=""
                        src={movieInfo.Poster}
                        alt="placeholder"
                        width="200"
                        height="275"
                      />
                    )}
                    
                    {/* <img
                      src={movieInfo.Poster}
                      alt="beyonce"
                      width="200"
                      height="275"
                    /> */}
                  </div>

                  {/* info */}
                  <div className="col col-8 flex">
                    <p className="justify-content-center">{movieInfo.Title}</p>
                    <p className="justify-content-center">{movieInfo.Year}</p>
                    <p className="justify-content-center">Plot</p>

                    {/* button */}
                    <button type="button">More Information</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MovieSearchContainer;
