import React, { Component } from 'react';
import './Recipes.css';
import axios from 'axios'
import Recipe from '../../../components/Recipe/Recipe';
import { Helmet } from 'react-helmet';

const TITLE = "Recipes";

class Recipes extends Component {
    state = {
        recipes: []
    }

    componentDidMount () {

            axios.get('https://recipe-project-6.firebaseio.com/podaci.json')
            .then(response => {
                let niz = [];
                let ob = {};

                for(let i=0; i<Object.keys(response.data).length; i++){
                    let title = response.data[Object.keys(response.data)[i]].title;
                    let ingredients = response.data[Object.keys(response.data)[i]].ingredients;
                    let instructions = response.data[Object.keys(response.data)[i]].instructions;
                    let key = i;

                    ob = {
                        title: title,
                        ingredients: ingredients,
                        instructions: instructions,
                        key: key
                    }
                    niz.push(ob);
                }

                this.setState({
                    recipes: niz
                })

            });
    }

    recipeClicked = () => {
        console.log(recipe.key + 1);
    }


    render () {
        let recipes = this.state.recipes.map(recipe => {
            return (        
                <Recipe 
                    key={recipe.key} 
                    title={recipe.title} 
                    ingredients={recipe.ingredients} 
                    instructions={recipe.instructions} 
                    clicked={recipeClicked}
                />
            )
        });

        return (
            <div>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <div className="header">
                    <input type="text" placeholder="Search..." />
                    <h1>Recipes</h1>
                    <p>dasdasdasd asdasd asdncvjsoasdkc kae mfkosdmafka mfkwerm vkaersdfkgmasd; fklmad</p>
                </div>
                <div className="prikaz">
                    {recipes}
                </div>      
            </div>
        )


    }
}

export default Recipes;
