import moviesComponent from './Movies';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        rating: state.filters.rating,
        genres: state.genres,
        movies: state.movies,
        page: state.page
    };
};

export default connect(mapStateToProps)(moviesComponent);