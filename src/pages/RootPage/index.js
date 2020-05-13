import * as React from 'react';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.scss';

class RootPage extends React.Component {

  allowedRoutes(user) {
    const { routes } = this.props && this.props.route;
    return routes ? routes.filter(route => (route.auth ? route.auth(user) : true)) : [];
  }

  render() {
    // const { user } = this.props;
    // const userData = user && {
    //   avatar: user.avatar,
    //   firstName: user.first_name,
    //   lastName: user.last_name,
    //   freelancerId: user.freelancer_id,
    //   role: user.role
    // };

    return (
      <div className="root_page">
        <Header />
        <main>{renderRoutes(this.allowedRoutes(null))}</main>
        <Footer />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
// });
//
// const mapDispatchToProps = dispatch => ({
// });

export default RootPage;
