import filterComponent from './Filter';
import { connect } from 'react-redux';
import command from '../commands/SelectRating';

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        onRateClick: rate => dispatch(command(rate))
    }
}

const mapStateToProps = state => ({
    currentRate: state.filters.rating,
    rateLimit: state.filters.ratingLimit
})

export default connect(mapStateToProps, mapDispatchToProps)(filterComponent)