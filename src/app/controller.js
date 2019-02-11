import React from 'react';
import { connect } from 'react-redux';
import { loggedInCheck } from '../auth/redux/actions';

const mapStateToProps = state => ({
  loggedInUser: state.auth.loggedInUser,
  loggedInCheckDone: state.auth.loggedInCheckDone,
});

const mapDispatchToProps = (dispatch) => ({
  authLogInCheck: () => dispatch(loggedInCheck()),
});

export default Component => {
	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(
		class extends React.Component {
      componentDidMount() {
        this.props.authLogInCheck();
      }

      componentDidUpdate() {
        const { loggedInUser, loggedInCheckDone, history } = this.props;
        const { pathname } = window.location;
        if (!loggedInUser && loggedInCheckDone && pathname !== '/sign-in') history.push('/sign-in');
      }

			render() {
        const { loggedInUser, loggedInCheckDone } = this.props;
        const { pathname } = window.location;
				const passThruProps = {
					...this.props,
          showPage: (loggedInUser && loggedInCheckDone) || pathname === '/sign-in',
				};

				return <Component {...passThruProps} />;
			}
    }
  )
}