import React, { Component } from 'react';
import './Home.css';
import Recipes from './Recipes/Recipes';
import NewRecipe from './NewRecipe/NewRecipe';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'; 

class Home extends Component {
    render () {
        return (
            <div className="Home">
                {/*pocetna strana sa navigacijom i ostalim sadrzajem*/}
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/recipes" >Recipes</NavLink></li>
                            <li><NavLink to="/new-recipe">New Recipe</NavLink></li>
                        </ul>
                    </nav>
                </header>

                <Redirect from="/" to="/recipes" />
                <Switch>
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/new-recipe" component={NewRecipe} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>
                {/* <Switch>
                    <Redirect from="/react-recipe" to="/recipes/" />
                    <Redirect from="/" to="/recipes/" />
                    <Route path="/recipes" component={Recipes} />
                    <Route path="/new-recipe" component={NewRecipe} />
                    <Route render={() => <h1>Not found</h1>} />
                </Switch>  */}
            </div>
        );
    }
}

export default Home;