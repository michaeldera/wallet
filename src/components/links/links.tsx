import React from 'react';
import "./link.css";

function BeneficiariesLink(props: any) {
  return (
    <div className="round-link">
      {props.children}
    </div>
  );
}

export default BeneficiariesLink;