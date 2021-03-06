import React from 'react';

function Beneficiaries(props: any) {
  return (
    <div>
      <p>Beneficiaries</p>
      {props.beneficiaries.map(
        (s: any) => (
          <li key={s.code}>{s.name} - {s.code}({s.type})</li>
        )
      )}
    </div>

  );
}

export default Beneficiaries;