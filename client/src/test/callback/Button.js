import React from "react";

const randomColor = () => "#" + (Math.random() * 0xFFFFFF << 0).toString(16)

function Button(props) {
    console.log(props.children)
    return <button style={{
        'backgroundColor': randomColor(),
        'margin':'5px 10px',
        'border':'2px solid #555',
        'borderRadius':'10px',
        'padding':'10px 15px',
        'fontSize':'18px'
    }}
        onClick={props.onclick}>
        {props.children}
    </button>;
}

export default React.memo(Button);
