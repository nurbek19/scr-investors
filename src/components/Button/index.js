import React from "react";

import './index.scss';

export const Button = (props) => (
  <button type={props.type} className="button">{props.children}</button>
);
