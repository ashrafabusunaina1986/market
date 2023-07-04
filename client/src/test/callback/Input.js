import React from "react";

function Input({text,name}) {
  return <input type={text} name={name}
  style={{
    'margin':'5px 10px',
        'border':'2px solid #555',
        'borderRadius':'10px',
        'padding':'10px 15px',
        'fontSize':'18px'
  }}
  />;
}

export default Input;
