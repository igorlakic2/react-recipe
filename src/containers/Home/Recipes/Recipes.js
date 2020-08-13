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
        console.log(this.props);

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

    render () {
        console.log(this.state.recipes.length);

        let recipes = this.state.recipes.map(recipe => {
            return (        
                <Recipe key={recipe.key} title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} />
            )
        });

        return (
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div>
                {/* strana sa dodatim receptima */}
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
