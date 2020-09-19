import React, { Component } from 'react';
import './NewRecipe.css';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const TITLE = "New recipe";

class NewRecipe extends Component {
    state = {
        title: '',
        ingredients: '',
        instructions: ''
    }

    postRecipeHandler = () => {
        const data = {
            title: this.state.title,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        };

        axios.post('https://recipe-project-6.firebaseio.com/podaci.json', data)
        .then(response => {
            this.props.history.replace('/recipes');
        });
    }

    render () {
        return (
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                
                <div className="NewRecipe">
                    <h1>Add Recipe</h1>
                    <label>Title</label>
                    <input type="text" onChange={(event) => this.setState({title: event.target.value})} />
                    <label>Ingredients</label>
                    <input type="text" name="ingredients" onChange={(event) => this.setState({ingredients: event.target.value})} />
                    <label>Instructions</label>
                    <textarea rows="4" onChange={(event) => this.setState({instructions: event.target.value})} />

                    <button onClick={this.postRecipeHandler}>Add Recipe</button> 
                </div>
            </div>
        );
    }
}

export default NewRecipe;