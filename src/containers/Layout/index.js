import React, {Fragment} from 'react';
import {connect} from "react-redux";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {logoutUser} from "../../store/actions/users";

const Layout = props => {
  return (
    <Fragment>
      <Header token={props.token} />
      <main>
        {props.children}
      </main>
      <Footer/>
    </Fragment>
  )
};

const mapStateToProps = state => ({
  token: state.userStore.token
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
