import React from 'react';
import './ModalBackground.css';

const modalBackground = (props) => {
    return (
        <div className="ModalBackground" onClick={props.clicked}></div>
    );
}

export default modalBackground;