import React from 'react';

export default function Button(props) {
    return (
        <button className={props.className} type="submit" onClick={props.onClick}>
            {props.buttonTitle}
        </button>
    );
}
