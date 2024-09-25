import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      address:'',
      city:''
    };
  }
  myChangeHandler = (event) => {
    console.log(event);
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "age") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form>
      <h1>Hello {this.state.username} {this.state.age} {this.state.address} {this.state.city}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter your age:</p>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <p>Enter your Address:</p>
      <input
        type='text'
        name='address'
        onChange={this.myChangeHandler}
      />
       <p>Enter your city:</p>
      <input
        type='text'
        name='city'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default Register