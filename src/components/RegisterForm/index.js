import * as React from 'react';
import {Formik, Form} from 'formik';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import {Button} from '../../components/Button';
import {TextInput} from '../../components/Forminput';

import config from "../../config";

import './index.scss';

class RegisterForm extends React.Component {
  facebookResponse = response => {
    console.log(response);
    if (response.id) {
      this.props.facebookLogin({access_token: response.accessToken, code: ''});
    }
  };

  render() {
    return (
      <div className="sign-up-form">
        <div className="social-register-links">
          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M24.0001 9.28C28.5067 9.28 31.5467 11.2267 33.2801 12.8533L40.0534 6.24C35.8934 2.37333 30.4801 0 24.0001 0C14.6134 0 6.50673 5.38667 2.56006 13.2267L10.3201 19.2533C12.2667 13.4667 17.6534 9.28 24.0001 9.28Z"
                  fill="#EA4335"/>
                <path
                  d="M47.04 24.5334C47.04 22.56 46.88 21.4936 46.5333 20.0002H24V29.0002H37.2267C36.96 31.2136 35.52 34.08 32.32 36.32L39.8933 42.1867C44.4267 38 47.04 31.84 47.04 24.5334Z"
                  fill="#4285F4"/>
                <path
                  d="M10.3467 28.7466C9.84 27.2532 9.54667 25.6532 9.54667 23.9999C9.54667 22.3466 9.84 20.7466 10.32 19.2532L2.56 13.2266C0.933333 16.4799 0 20.1332 0 23.9999C0 27.8666 0.933333 31.5199 2.56 34.7732L10.3467 28.7466Z"
                  fill="#FBBC05"/>
                <path
                  d="M24.0002 47.9999C30.4802 47.9999 35.9202 45.8666 39.8936 42.1866L32.3202 36.3199C30.2936 37.7332 27.5736 38.7199 24.0002 38.7199C17.6536 38.7199 12.2669 34.5332 10.3469 28.7466L2.58691 34.7732C6.53358 42.6132 14.6136 47.9999 24.0002 47.9999Z"
                  fill="#34A853"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <path d="M0 0H48V48H0V0Z" fill="white"/>
                </clipPath>
              </defs>
            </svg>

          </div>

          <FacebookLoginButton
            appId={config.facebookAppId}
            fields="name,email"
            render={renderProps => (
                <div onClick={renderProps.onClick}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z"
                      fill="#1877F2"/>
                    <path
                      d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6781 15.75 31.6594 15.75H34.6875V9.84375C34.6875 9.84375 31.9406 9.375 29.3156 9.375C23.8313 9.375 20.25 12.6984 20.25 18.7125V24H14.1562V30.9375H20.25V47.7094C21.4734 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3422Z"
                      fill="white"/>
                  </svg>
                </div>
            )}
            callback={this.facebookResponse}
          />

          <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#0077B5"/>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M17.319 14.8227C17.319 16.3918 16.1378 17.6473 14.2414 17.6473H14.2066C12.3807 17.6473 11.2002 16.3918 11.2002 14.8227C11.2002 13.2204 12.4166 12 14.2772 12C16.1378 12 17.2837 13.2204 17.319 14.8227ZM16.9607 19.8778V36.2196H11.5218V19.8778H16.9607ZM36.5754 36.2196L36.5756 26.8497C36.5756 21.8303 33.8924 19.4941 30.3133 19.4941C27.4256 19.4941 26.1327 21.0802 25.4109 22.1929V19.8783H19.9713C20.043 21.4117 19.9713 36.22 19.9713 36.22H25.4109V27.0934C25.4109 26.605 25.4462 26.1178 25.59 25.7681C25.9831 24.7924 26.8781 23.7822 28.3807 23.7822C30.3496 23.7822 31.1367 25.2807 31.1367 27.4767V36.2196H36.5754Z"
                    fill="white"/>
            </svg>

          </div>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('This field is required'),
            password: Yup.string()
              .required('This field is required')
              .min(8, 'Too Short!')
              .lowercase('One lowercase character')
              .uppercase('One uppercase character')
              .matches(/\d/, {message: 'At least one number is required'})
              .matches(/\W|_/g, {message: 'At least one special character is required'})
          })}
          onSubmit={(values, obj) => {
            console.log('asdfasdfasd fasdfadsfadsf adsfasdfads', values);
            this.props.registerUser(values);

            // obj.setSubmitting(false);
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue,
              isSubmitting
            }) => (
            <Form onSubmit={handleSubmit}>
              <TextInput
                name="email"
                type="email"
                placeholder="Email"
              />

              <TextInput
                name="password"
                type="password"
                placeholder="Password"
              />


              <div className="register-button">
                <Button type="submit">
              <span>
                Register
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M11.7023 0.217336C11.6485 0.152843 11.5818 0.100263 11.5066 0.0629492C11.4314 0.0256355 11.3492 0.00440673 11.2653 0.000616153C11.1814 -0.00317443 11.0976 0.0105564 11.0194 0.0409333C10.9411 0.0713101 10.87 0.117667 10.8106 0.177047C10.7512 0.236428 10.7049 0.30753 10.6745 0.38582C10.6441 0.46411 10.6304 0.54787 10.6342 0.631761C10.6379 0.715653 10.6592 0.797834 10.6965 0.873065C10.7338 0.948297 10.7864 1.01493 10.8509 1.06871L15.1946 5.41754H0.837002C0.682012 5.42576 0.536079 5.49312 0.429277 5.60574C0.322475 5.71836 0.262939 5.86765 0.262939 6.02286C0.262939 6.17807 0.322475 6.32737 0.429277 6.43999C0.536079 6.55261 0.682012 6.61997 0.837002 6.62819H15.1946L10.8441 10.9719C10.7346 11.0866 10.6735 11.239 10.6735 11.3976C10.6735 11.5562 10.7346 11.7086 10.8441 11.8233C10.8999 11.8793 10.9663 11.9237 11.0393 11.9541C11.1123 11.9844 11.1907 12 11.2698 12C11.3488 12 11.4272 11.9844 11.5002 11.9541C11.5733 11.9237 11.6396 11.8793 11.6954 11.8233L17.0761 6.44259C17.1334 6.38747 17.179 6.32135 17.2101 6.24821C17.2412 6.17506 17.2572 6.09639 17.2572 6.0169C17.2572 5.93742 17.2412 5.85874 17.2101 5.7856C17.179 5.71245 17.1334 5.64634 17.0761 5.59122L11.7023 0.217336Z"
  fill="black"/>
</svg>

              </span>
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="privacy-policy">
          By clicking "Register" you agree to Scramble's <br/> <Link to="#">Terms & Conditions</Link> and <Link to="#">Privacy
          Policy</Link>
        </div>

        <div className="sign-in-button">
          <p>Already registered?</p>

          <Button>Sign in</Button>
        </div>
      </div>
    )
  }
}

export default RegisterForm;
