const defaultState = {
  movieTitle: "",
  movieData: [],
  search:""
};

export default function findMovie(state = defaultState, action) {
    const { type, payload } = action;
  

  switch (type) {
    // case "UPDATE_MOVIE_INFO": {
    //   return {
    //     ...state,
    //     movieTitle: payload
    //   };
    // }

    case "UPDATE_MOVIE_TITLE": {
      return {
        ...state,
        movieTitle: payload
      };
    }

    case "FIND_MOVIE_FULFILLED": {
      return {
        ...state,
        movieData: payload.data.Search
      };
    }

    default: {
      return state;
    }
  }
}
