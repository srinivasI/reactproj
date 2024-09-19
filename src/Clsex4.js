import React, { Component } from 'react'
import Clsex2 from './Clsex2'
class Clsex4 extends Component {
    constructor(){
      super()
      this.state = {username:"Dhananjay", city:"Delhi"}
    }

    newstate = ()=>{
      this.setState({username:"Ajay",city:'Pune'})
    }

    render() {
      const {username,city} = this.state
      return (
        <>
        <Clsex2 mycity={this.state.city}/>
        <h3>Hello {username} from {city}</h3>
        <button onClick={this.newstate} >click to change name</button>
        </>
      )
    }
  }
export default Clsex4;