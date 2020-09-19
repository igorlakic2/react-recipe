import React from 'react';
import './Recipe.css';

const recipe = (props) => {
    return(
        <article className="Recipe" onClick={props.clicked}>
            <h3>Naslov: {props.title}</h3>
            <p>Sastojci: {props.ingredients}</p>
            <p>Instrukcije: {props.instructions}</p>
        </article>
    );
}

export default recipe;
