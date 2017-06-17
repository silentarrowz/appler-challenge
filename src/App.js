import React, { Component } from 'react';
import TableData from './components/TableData';
import  './App.css';

import {contacts} from './constants/contacts.js';

console.log(contacts);

class App extends Component{
  constructor(){
    super();
    this.state={
      name:''
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    var term = e.target.value;
    
    this.setState({
      name:e.target.value
    });
    
    
    
    
  }
  
  render(){
    return(
      <div id="messages">
        <div id="headingview">
        <table>
        <tr>
        <td className="message"><h2 >Message</h2></td>
         <td className="namecell"><div className="namediv"> <h3 >Name</h3></div></td>
          </tr>

          </table>
                    </div>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
       <TableData searchTerm={this.state.name} contacts={contacts} />
        
        </div>
    )
  }
}


export default App;
