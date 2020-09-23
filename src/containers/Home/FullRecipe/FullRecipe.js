import React, { Component } from 'react';
import ModalBackground from '../../../components/ModalBackground/ModalBackground';
import './FullRecipe.css';

class FullRecipe extends Component {
    render () {
        return (
            <div>
                <ModalBackground clicked={this.props.closed} />
                <div className="FullRecipe">
                    {this.props.children}
                </div>      
            </div>
        );
    }
}

export default FullRecipe;