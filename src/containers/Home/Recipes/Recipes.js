import React, { Component } from 'react';
import './Recipes.css';
import axios from 'axios'
//import axios from '../../../axios';
import Recipe from '../../../components/Recipe/Recipe';

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
                    let naslov = response.data[Object.keys(response.data)[i]].title;
                    let sastojci = response.data[Object.keys(response.data)[i]].ingredients;
                    let instrukcije = response.data[Object.keys(response.data)[i]].instructions;
                    let kljuc = i;

                    ob = {
                        naslov: naslov,
                        sastojci: sastojci,
                        instrukcije: instrukcije,
                        kljuc: kljuc
                    }
                    niz.push(ob);
                }
                // console.log(response.data);

                this.setState({
                    recipes: niz
                })

            });
    }

    render () {
        console.log(this.state.recipes.length);

        let recipes = this.state.recipes.map(recipe => {
            return (        
                <Recipe key={recipe.kljuc} title={recipe.naslov} ingredients={recipe.sastojci} instructions={recipe.instrukcije} />
            )
        });

        return (
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
