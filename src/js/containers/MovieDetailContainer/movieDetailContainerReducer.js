export default function movieDetailContainer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'MOVIE_DETAIL_CONTAINER': {
        return {
          ...state,
          cityName: payload
        };
      }
  
      case 'MOVIE_SEARCH_CONTAINER': {
        return {
          ...state,
          weatherData: payload.data,
          searchHistory: [...state.searchHistory, {name: payload.data.name, time: moment().format('MMMM Do YYYY, h:mm:ss a' )}]
        }
      }
  
  
    default: {return state;}
    }
  } 