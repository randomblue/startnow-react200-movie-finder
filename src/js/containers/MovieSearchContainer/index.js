import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
      movieTitle: store.search.movieTitle,
      movieData: store.search.movieData
    };
  }

export default connect(mapStoreToProps)(MovieSearchContainer)