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
import Hookex1 from './Hookex1';
import Hookex2 from './Hookex2';
import Hookex4 from './Hookex4'
import User from './User';
import Routedata from './Routedata';
import Routeex from './Routeex';
import Routeex2 from './Routeex2';
import Routerex3 from './Routerex3';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('srini'));
root.render(
  <React.StrictMode>
    <Routeex2/>
     {/* <BrowserRouter>
    <Routerex3/>
    </BrowserRouter> */}
    {/*   <User/>
    <Hookex4/>
    <Hookex1/>
    <Hookex2/> */}
    {/* <Outer/>
     <Lifeex favcol="greenPink"/>  */}
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
