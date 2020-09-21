import React, { Component } from 'react';
import ModalBackground from '../../../components/ModalBackground/ModalBackground';

class FullRecipe extends Component {
    render () {
        return (
            <div>
                <ModalBackground clicked={this.props.closed} />
            </div>
        );
    }
}

export default FullRecipe;