import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Second from './Second';
import Arrowex from './Arrowex';
import Hookex from './Hookex';
import Clsex1 from './Clsex1';
import Clsex2 from './Clsex2';
import Clsex3 from './Clsex3';
import Clsex4 from './Clsex4';
import Counter from './Counter';
import Parent from './Parent';
import Clsex5 from './Clsex5';
import Mytable from './Mytable';
import Register from './Register';
import Login from './Login';
import Lifeex from './Lifeex';
import Outer from './Outer';


const root = ReactDOM.createRoot(document.getElementById('srini'));
root.render(
  <React.StrictMode>
    <Outer/>
     <Lifeex favcol="greenPink"/> 
   {/*  <Login/>
    <Register/>
    <Mytable/>  */}
    {/* <Clsex5/>
    <Parent/>
    <Counter/>
    <Clsex4/> */}
   {/*  <Clsex3 character="Nice Good"/>
    <Clsex2/>
    <Hookex/>
   <Arrowex/>
    <App /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
