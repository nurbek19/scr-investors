import * as React from 'react';
import { connect } from "react-redux";

import RegisterForm from '../../components/RegisterForm';
import InformationForm from '../../components/InformationForm';
import VerifyForm from '../../components/VerifyForm'

import {registerUser, createAccount, facebookLogin} from "../../store/actions/users";

import './index.scss';

const titles = {
  1: 'Create account',
  2: 'Create account',
  3: 'Verify your identity'
};

class SignUp extends React.Component {
  render() {
    return (
      <div className="registration-steps">
        <div className="step-number">Step {this.props.step} of 3</div>

        <h1>{titles[this.props.step]}</h1>

        {this.props.step === 2 && <InformationForm createAccount={this.props.createAccount} />}
        {this.props.step === 1 && <RegisterForm registerUser={this.props.registerUser} facebookLogin={this.props.facebookLogin}  />}
        {this.props.step === 3 && <VerifyForm />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  step: state.userStore.registrationStep
});

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(registerUser(userData)),
  createAccount: data => dispatch(createAccount(data)),
  facebookLogin: data => dispatch(facebookLogin(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
