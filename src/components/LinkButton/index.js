import React from "react";
import { Link } from "react-router-dom";

import './index.scss';

const LinkButton = (props) => (
  <div className="link-button">
    <Link to={props.link}>{props.children}</Link>
  </div>
);

export default LinkButton;
