import React, { Component } from 'react';
import './NewRecipe.css';

class NewRecipe extends Component {
    render () {
        return (
            <div>
                <div className="NewRecipe">
                    <h1>Add Recipe</h1>
                    <label>Title</label>
                    <input type="text" />
                    <label>Ingredients</label>
                    <input type="text" name="ingredients" />
                    <label>Instructions</label>
                    <textarea rows="4" />

                    <button onClick>Add Recipe</button>
                </div>
            </div>
        );
    }
}

export default NewRecipe;