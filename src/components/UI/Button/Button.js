import React from 'react';

import './Button.css';

const Button = props => {
  const isValid = props.isValid;
  console.log(document.getElementsByTagName('button'));
  return (
    <button type={props.type} className={`button${!isValid ? " invalid" : ""}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
