import axios from 'axios';

export function movieTitleSearch(movieTitle) {
    return {
      type: 'UPDATE_MOVIE_TITLE',
      payload: movieTitle
    };
  }

export function findMovie(movieTitle) {
    return {
      type: 'FIND_MOVIE',
      payload: axios.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=8730e0e`)
    };

}

  //react redux weather api axios function