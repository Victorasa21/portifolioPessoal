import React, {Component } from 'react';
import './App.css';
import "./css/pure-min.css";
import Home from "./pages/Home";
import Menu from "./utils/Menu";
import Academicos from "./pages/Academicas";
import Profissionais from "./pages/Profissionais";
import Skills from "./pages/Skills";
import Voluntario from "./pages/Voluntario";

class App extends Component {
  
  state = {
    currentPage: 'Home',
  }

  changePage = (newPage) => {
    this.setState({currentPage: newPage});
  }

 render() {
   
  return (
  <div className="container">
    <div className="menu">
      <Menu
        changePage={this.changePage}
      />
    </div>
    <div className="content">
      {this.state.currentPage === 'Home' ? <Home/> : 'fodasse'}
      {this.state.currentPage === 'Skills' && <Skills/>}
      {this.state.currentPage === 'Profissionais' && <Profissionais/>}
    </div>
  </div>

          
  );
 }
}

export default App;
