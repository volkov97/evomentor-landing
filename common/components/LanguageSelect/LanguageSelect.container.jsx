import { connect } from 'react-redux';

import LanguageSelect from './LanguageSelect';

const mapStateToProps = ({ i18n: { locale } }) => ({
    lang: locale,
});

const mapDispatchToProps = null;

// for server rendering
LanguageSelect.fetchData = null;

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);
