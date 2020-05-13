import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import SignUp from './containers/SignUp';
import DepositPage from "./pages/DepositPage";


const ProtectedRoute = ({isAllowed, ...props}) => (
  isAllowed ? <Route {...props} /> : <Redirect to="/login" />
);

const Routes = ({user}) => {
  return (
    <Switch>
      <Route path="/" exact component={SignUp}/>
      <Route path="/deposit" exact component={DepositPage}/>
    </Switch>
  );
};

export default Routes;
