import React, { Component } from 'react';
import './Recipes.css';
import axios from 'axios'
//import axios from '../../../axios';

class Recipes extends Component {

    componentDidMount () {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                alert(error);
                //this.setState({error: true});
            });
    }

    render () {
        return (
            <div>
                {/* strana sa dodatim receptima */}
                <div className="header">
                    <input type="text" placeholder="Search..." />
                    <h1>Recipes</h1>
                    <p>dasdasdasd asdasd asdncvjsoasdkc kae mfkosdmafka mfkwerm vkaersdfkgmasd; fklmad</p>
                </div>
                
            </div>
        );
    }
}

export default Recipes;