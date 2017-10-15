import { connect } from 'react-redux';

import { handleSubscribe, handleFieldChange } from '../../actions/subscription';

import Subscription from './Subscription';

const mapStateToProps = ({ subscription: { data: { email }, message, error, isLoading } }) => ({
  email,
  message,
  error,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  onSubscribe: email => dispatch(handleSubscribe(email)),
  onChange: (e) => { dispatch(handleFieldChange(e)); },
});

// for server rendering
Subscription.fetchData = null;

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
