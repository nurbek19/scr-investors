import * as React from 'react';
import './index.scss';
import {Form, Formik, Field} from "formik";
import * as Yup from "yup";
import {TextInput} from "../Forminput";
import {Button} from "../Button";
import LinkButton from "../LinkButton";

import { countries } from "./countries";

const InformationForm = (props) => {
  return (
    <div className="information-form">
      <Formik
        initialValues = {{
          first_name: '',
          last_name: '',
          phone_number: '',
          country: '',
          city: '',
          address: '',
          postal_code: ''
        }}
        validationSchema={Yup.object({
          first_name: Yup.string()
            .required('This field is required'),
          last_name: Yup.string()
            .required('This field is required'),
          phone_number: Yup.number()
            .required('This field is required'),
          country: Yup.string()
            .required('This field is required'),
          city: Yup.string()
            .required('This field is required'),
          address: Yup.string()
            .required('This field is required'),
          postal_code: Yup.number()
            .required('This field is required')
        })}
        onSubmit={(values, obj) => {
          props.createAccount(values);

          obj.setSubmitting(false);
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
              name="first_name"
              type="text"
              placeholder="First name"
            />

            <TextInput
              name="last_name"
              type="text"
              placeholder="Last name"
            />

            <TextInput
              name="phone_number"
              type="number"
              placeholder="Phone number"
            />

            <label htmlFor="country" className="select-field">
              <Field name="country" id="country" as="select">
                {countries.map(country => (
                  <option value={country.name} key={country.name}>{country.name}</option>
                ))}
              </Field>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.43111 8.75869C7.75111 9.08044 8.26667 9.08044 8.56889 8.75869L15.7333 1.55511C16.0889 1.19762 16.0889 0.625621 15.7333 0.268123C15.3778 -0.0893744 14.8089 -0.0893744 14.4533 0.268123L8.56889 6.18471C8.24889 6.50645 7.73333 6.50645 7.43111 6.18471L1.54667 0.285998C1.19111 -0.0714994 0.622222 -0.0714994 0.266667 0.285998C-0.0888889 0.643496 -0.0888889 1.21549 0.266667 1.57299L7.43111 8.75869Z" fill="#9E98A3"/>
              </svg>

              {touched.country && errors.country ? (
                <div className="error">{errors.country}</div>
              ) : null}
            </label>


            <TextInput
              name="city"
              type="text"
              placeholder="City"
            />

            <TextInput
              name="address"
              type="text"
              placeholder="Address"
            />

            <TextInput
              name="postal_code"
              type="number"
              placeholder="Postal code"
            />

            <div className="information-form-button">
              <Button type="submit">
              <span>
                Continue
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7023 0.217336C11.6485 0.152843 11.5818 0.100263 11.5066 0.0629492C11.4314 0.0256355 11.3492 0.00440673 11.2653 0.000616153C11.1814 -0.00317443 11.0976 0.0105564 11.0194 0.0409333C10.9411 0.0713101 10.87 0.117667 10.8106 0.177047C10.7512 0.236428 10.7049 0.30753 10.6745 0.38582C10.6441 0.46411 10.6304 0.54787 10.6342 0.631761C10.6379 0.715653 10.6592 0.797834 10.6965 0.873065C10.7338 0.948297 10.7864 1.01493 10.8509 1.06871L15.1946 5.41754H0.837002C0.682012 5.42576 0.536079 5.49312 0.429277 5.60574C0.322475 5.71836 0.262939 5.86765 0.262939 6.02286C0.262939 6.17807 0.322475 6.32737 0.429277 6.43999C0.536079 6.55261 0.682012 6.61997 0.837002 6.62819H15.1946L10.8441 10.9719C10.7346 11.0866 10.6735 11.239 10.6735 11.3976C10.6735 11.5562 10.7346 11.7086 10.8441 11.8233C10.8999 11.8793 10.9663 11.9237 11.0393 11.9541C11.1123 11.9844 11.1907 12 11.2698 12C11.3488 12 11.4272 11.9844 11.5002 11.9541C11.5733 11.9237 11.6396 11.8793 11.6954 11.8233L17.0761 6.44259C17.1334 6.38747 17.179 6.32135 17.2101 6.24821C17.2412 6.17506 17.2572 6.09639 17.2572 6.0169C17.2572 5.93742 17.2412 5.85874 17.2101 5.7856C17.179 5.71245 17.1334 5.64634 17.0761 5.59122L11.7023 0.217336Z" fill="black"/>
                </svg>
              </span>
              </Button>
            </div>

            <LinkButton link="/deposit">Continue later</LinkButton>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default InformationForm;
