import React from 'react';
import App from './App';
import First from './First';
import Hookex from './Hookex';
 
 var Second =function () {
  var mysalry=50000;
  var coursename="React"
 
  return <><br/><br/>Second Component content start from here<Hookex/><Headline myvalue={mysalry} /></>;
}
 
function Headline(props) {
  return <h1>{props.myvalue}</h1>;
}
 
export default Second;