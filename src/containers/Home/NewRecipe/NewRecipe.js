import React, { Component } from 'react';
import './NewRecipe.css';
import axios from 'axios';

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
        
        // axios.post('http://jsonplaceholder.typicode.com/posts', data)
        //     .then(response => {
        //         console.log(response.data);
        //         this.props.history.replace('/recipes');
        //     });

        axios.post('https://recipe-project-6.firebaseio.com/podaci.json', data)
        .then(response => {
            // console.log(response);
            this.props.history.replace('/recipes');
        });
    }

    render () {
        return (
            <div>
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