import React from 'react';
 
const Arrowex = () => {
  const greeting = 'Hello Arrow ex Component!';
 var age=80;
  return <Headline value={greeting} age={age} />;
};
 
const Headline = (props) => {
  return <h1>{props.value}=={props.age}</h1>;
};
 
export default Arrowex;