import React, { Component } from 'react';
import './Recipes.css';
import axios from 'axios'
//import axios from '../../../axios';
import Recipe from '../../../components/Recipe/Recipe';

class Recipes extends Component {
    state = {
        recipes: {
            title: null,
            ingredients: null,
            instructions: null
        }
    }

    componentDidMount () {
        console.log(this.props);
        // axios.get('http://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         const rcps = response.data.slice(0,4);
        //         const updatedRcps = rcps.map(rcp => {
        //             return {
        //                 ...rcp
        //             }
        //         });
        //         this.setState({ recipes: updatedRcps });
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         alert(error);
        //         //this.setState({error: true});
        //     });

            // axios.get('https://recipe-project-6.firebaseio.com/podaci.json')
            // .then(response => {
            //     console.log(response);
            // })
            // .catch(error => {
            //     console.log(error);
            //     alert(error);
            //     //this.setState({error: true});
            // });

            axios.get('https://recipe-project-6.firebaseio.com/podaci.json')
            .then(response => {
                let pwd = Object.keys(response.data)[Object.keys(response.data).length - 1];
                let title = response.data[pwd].title;
                let ingr = response.data[pwd].ingredients;
                let inst = response.data[pwd].instructions;

                this.setState({
                    recipes: {
                        title: title,
                        ingredients: ingr,
                        instructions: inst
                    }
                })

                // this.setState({recipes: response.data})
                // console.log(Object.keys(response.data).length - 1);
                // console.log(Object.keys(response.data)[Object.keys(response.data).length - 1]);
                console.log(`Naslov: ${title}, sastojci: ${ingr}, instrukcije: ${inst}`);
            });
    }

    render () {

        // let recipes = this.state.recipes.map(recipe => {
        //     return (                    
        //         <Recipe title={recipe.title} ingredients={recipe.body} instructions={recipe.instructions}  /> 
        //                         //  instructions={recipe.instructions}
        //     )
        // });

        return (
            <div>
                {/* strana sa dodatim receptima */}
                <div className="header">
                    <input type="text" placeholder="Search..." />
                    <h1>Recipes</h1>
                    <p>dasdasdasd asdasd asdncvjsoasdkc kae mfkosdmafka mfkwerm vkaersdfkgmasd; fklmad</p>
                </div>         
                {/* {recipes}   */}
                <Recipe prvi={this.state.recipes.title} drugi={this.state.recipes.ingredients} treci={this.state.recipes.instructions}  />        
            </div>
        )


    }
}

export default Recipes;