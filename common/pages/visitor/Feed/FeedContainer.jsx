import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleLoadingProjects } from '../../../actions/projects';

import Feed from './Feed';

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadingProjects: bindActionCreators(handleLoadingProjects, dispatch)
    }
};

// for server rendering
Feed.fetchData = ({ store }) => store.dispatch(handleLoadingProjects());

export default connect(mapStateToProps, mapDispatchToProps)(Feed);