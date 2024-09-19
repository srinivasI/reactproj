import React, { Component } from 'react';
class Clsex2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Srinivas',
            age:38,
            location:'Hyderabad'
        }
    }

    render() {
        return (
            <>
            <h3>{this.props.mycity}</h3>
                <h1>Hello {this.state.name}</h1>
                <h3>My Age:{this.state.age}</h3>
                <h1>{this.state.location}</h1>
            </>
        );
    }
}
export default Clsex2;