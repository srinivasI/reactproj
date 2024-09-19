import React from 'react';

  class Clsex3 extends React.Component{
      constructor(props){
          super(props)
      }
    render(){
      return(
        <div>
          <label>I am a {this.props.character} Hello Sri.</label>
        </div>
      );
    }
  }

  export default Clsex3;