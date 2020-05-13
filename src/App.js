import React from 'react';
// import { renderRoutes } from 'react-router-config';
import ROUTES from './routes';
// import { connect } from 'react-redux';

import Layout from './containers/Layout';
import Routes from './rroutes';

const allowedRoutes = user => {
  return ROUTES.filter(route => (route.auth ? route.auth(user) : true)) || [];
};

function App() {
  return (
    <Layout>
      <Routes/>
    </Layout>
  );
}

// const mapStateToProps = state => ({
//   // user: state.userStore.user
// });

export default App;
