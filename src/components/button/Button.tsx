import React from 'react';
import "./button.css";

function Button(props: any) {
  return (
    <button className="btn">
      {props.children}
    </button>
  );
}

export default Button;