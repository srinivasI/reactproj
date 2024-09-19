import React from 'react';
import Clsex3 from './Clsex3';
export default class Clsex1 extends React.Component {

    render() {
        var myStyle = {
            fontSize: 80,
            fontFamily: 'Courier',
            color: 'red'
        }

        var i = 8;
       var mydata ="Aspire react"
        return (
            <div>
                <Clsex3 character={mydata}/>
                <div style={myStyle}>My Style content</div>
                <h1>{i === 5 ? 'True!' : 'False!'}</h1>
                <h3 style={myStyle}>Hello Prashanth</h3>
            </div>
        );
    }
}
 