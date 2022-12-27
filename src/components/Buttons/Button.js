import React from 'react';
import "./Button.css";

function Button(props) {
return (
<button className='button' onClick={props.onClick}>
More
</button>
);
}

export default Button;