import React from 'react';
import Hookex from './Hookex';
 
function First(props) {
  var myname = 'Hello Function Component!';
 var i=8;
  return <>
  <Hookex/><h1>Howa re you?--{props.mysal}==={props.cname}</h1><h3>Hello Srini  age-36</h3>
  {125+125} {i==5?'Aspire':"Failed"}
  </>;
}
 
export default First;