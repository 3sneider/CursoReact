import React, { Component } from 'react';
import logo from '../../logo.svg';
import Intro from '../Intro/Index';
import Series from '../../containers/series';

import 'whatwg-fetch';
import './App.css';

class App extends Component{
  
   render(){
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />         */}
          <Intro message="El mensaje que viaja"/>                    
        </header>  
        <body>   
          <Series />
        </body>
      </div>
      
    );
  }
}

export default App;
