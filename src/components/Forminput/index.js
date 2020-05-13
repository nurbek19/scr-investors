import React from 'react';
import classnames from 'classnames';
import { useField } from 'formik';

import './index.scss';

export const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);

  return (
    <div className="input-wrapper">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input className={classnames("text-input", (meta.touched && meta.error) && "text-input-error")} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}

{/*      <span onClick={props.clearField('fieldName', '')}>*/}
{/*        {field.value}*/}
{/*        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
{/*<path d="M8 0C3.57333 0 0 3.57333 0 8C0 12.4267 3.57333 16 8 16C12.4267 16 16 12.4267 16 8C16 3.57333 12.4267 0 8 0ZM10.3111 11.3778C9.54667 10.6133 8.76444 9.83111 8 9.06667C7.23556 9.83111 6.45333 10.6133 5.68889 11.3778C4.99556 12.0711 3.94667 11.0044 4.62222 10.3111C5.38667 9.54667 6.16889 8.76444 6.93333 8C6.16889 7.23556 5.38667 6.45333 4.62222 5.68889C3.92889 4.99556 4.99556 3.94667 5.68889 4.62222C6.45333 5.38667 7.23556 6.16889 8 6.93333C8.76444 6.16889 9.54667 5.38667 10.3111 4.62222C11.0044 3.92889 12.0533 4.99556 11.3778 5.68889C10.6133 6.45333 9.83111 7.23556 9.06667 8C9.83111 8.76444 10.6133 9.54667 11.3778 10.3111C12.0533 10.9867 10.9867 12.0533 10.3111 11.3778Z" fill="#D8D6DA"/>*/}
{/*</svg>*/}
{/*      </span>*/}

      {props.type === 'password' && (
        <ul className="password-criteria">
          <li className={field.value.length >= 8 && 'active'}>8 characters minimum</li>
          <li className={/[a-z]/.test(field.value) && 'active'}>One lowercase character</li>
          <li className={/[A-Z]/.test(field.value) && 'active'}>One uppercase character</li>
          <li className={/\W|_/g.test(field.value) && 'active'}>One special character</li>
          <li className={/\d/.test(field.value) && 'active'}>One number</li>
        </ul>
      )}
    </div>
  );
};
