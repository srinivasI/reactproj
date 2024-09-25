import React from 'react';
import './Mytable.css';
class Mytable extends React.Component {
	constructor(props) {
	   super(props)
	   this.state = {
		  students: [
			 { id: 1, name: 'SrinivasI', age: 31, email: 'ippili@gmail.com',mobile:886272515 },
			 { id: 2, name: 'Prashanth', age: 29, email: 'prashanth@gmail.com',mobile:1234567 },
			 { id: 3, name: 'Swathi', age: 26, email: 'swathi@gmail.com',mobile:886272515 },
             { id: 4, name: 'Amar', age: 25, email: 'amar@gmail.com',mobile:4444444 },
             { id:5, name:'Guru', age:30, email:'guru@gmail.com',mobile:55555555},
             { id:6, name:'Admin', age:20, email:'admin@gmail.com',mobile:98967655},
             { id:7, name:'Ankit', age:30, email:'ankit@gmail.com',mobile:455445566556},
             { id:8, name:'Naga', age:50, email:'naga@gmail.com',mobile:345345353},
             { id: 1, name: 'SrinivasI', age: 31, email: 'ippili@gmail.com',mobile:886272515 },
			 { id: 2, name: 'Prashanth', age: 29, email: 'prashanth@gmail.com',mobile:1234567 },
			 { id: 3, name: 'Swathi', age: 26, email: 'swathi@gmail.com',mobile:886272515 },
             { id: 4, name: 'Amar', age: 25, email: 'amar@gmail.com',mobile:4444444 },
             { id:5, name:'Guru', age:30, email:'guru@gmail.com',mobile:55555555},
             { id:6, name:'Admin', age:20, email:'admin@gmail.com',mobile:98967655},
             { id:7, name:'Ankit', age:30, email:'ankit@gmail.com',mobile:455445566556},
             { id:8, name:'Naga', age:50, email:'naga@gmail.com',mobile:345345353},{ id: 1, name: 'SrinivasI', age: 31, email: 'ippili@gmail.com',mobile:886272515 },
			 { id: 2, name: 'Prashanth', age: 29, email: 'prashanth@gmail.com',mobile:1234567 },
			 { id: 3, name: 'Swathi', age: 26, email: 'swathi@gmail.com',mobile:886272515 },
             { id: 4, name: 'Amar', age: 25, email: 'amar@gmail.com',mobile:4444444 },
             { id:5, name:'Guru', age:30, email:'guru@gmail.com',mobile:55555555},
             { id:6, name:'Admin', age:20, email:'admin@gmail.com',mobile:98967655},
             { id:7, name:'Ankit', age:30, email:'ankit@gmail.com',mobile:455445566556},
             { id:8, name:'Naga', age:50, email:'naga@gmail.com',mobile:345345353},{ id: 1, name: 'SrinivasI', age: 31, email: 'ippili@gmail.com',mobile:886272515 },
			 { id: 2, name: 'Prashanth', age: 29, email: 'prashanth@gmail.com',mobile:1234567 },
			 { id: 3, name: 'Swathi', age: 26, email: 'swathi@gmail.com',mobile:886272515 },
             { id: 4, name: 'Amar', age: 25, email: 'amar@gmail.com',mobile:4444444 },
             { id:5, name:'Guru', age:30, email:'guru@gmail.com',mobile:55555555},
             { id:6, name:'Admin', age:20, email:'admin@gmail.com',mobile:98967655},
             { id:7, name:'Ankit', age:30, email:'ankit@gmail.com',mobile:455445566556},
             { id:8, name:'Naga', age:50, email:'naga@gmail.com',mobile:345345353}
		  ]
	   }
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email ,mobile} = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
                 <td>{mobile}</td>
              </tr>
           )
        })
     }
     renderTableHeader(){
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='students'>
                 <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}
export default Mytable;