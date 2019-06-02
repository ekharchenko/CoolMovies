import pagerComponent from './Pager';
import { connect } from 'react-redux';
import command from '../commands/ChangePage';

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        onLoadMoreClick: (page) => { dispatch(command(page)); }
    };
};

const mapStateToProps = state => ({
    page: state.page
});

export default connect(mapStateToProps, mapDispatchToProps)(pagerComponent);