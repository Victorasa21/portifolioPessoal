import React, {Component } from 'react';
import './App.css';
import "./css/side-menu.css";
import "./css/pure-min.css";
import Home from "./pages/Home";
import Menu from "./utils/Menu"


class App extends Component {
  
 render() {
   
  return (
  <div>
    <Menu/>
    <Home/>
  </div>

          
  );
 }
}

export default App;
