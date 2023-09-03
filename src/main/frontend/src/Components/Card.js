import React from "react";

import "./Css/Card.css";

const Card = (props) => {
  const classes = props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
