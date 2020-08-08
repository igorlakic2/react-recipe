import React from 'react';
import './Recipe.css';

const recipe = (props) => {
    return(
        <article className="Recipe">
            <h3>Naslov: {props.prvi}</h3>
            <p>Sastojci: {props.drugi}</p>
            <p>Instrukcije: {props.treci}</p>
        </article>
    );
}

export default recipe;
