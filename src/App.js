import React, { Component } from 'react';
import './App.css';
import "./css/side-menu.css";
import "./css/pure-min.css";
import Home from "./pages/Home";
import Menu from "./utils/Menu";
import Skills from "./pages/Skills";
import Profissionais from './pages/Profissionais';
import Academicas from './pages/Academicas';
import Voluntario from './pages/Voluntario';

class App extends Component {

  state = {
    currentPage: 'Home'
  }

  changePage = (newPage) => {
    this.setState({ currentPage: newPage })
  }

  render() {

    return (
      <div className="mainContainer">

        <div className="menuContainer">
          <Menu changePage={this.changePage} />
        </div>
        <div className="contentContainer">

          {this.state.currentPage === 'Home' && <Home />}
          {this.state.currentPage === "Skills" && <Skills />}
          {this.state.currentPage === "Profissionais" && <Profissionais />}
          {this.state.currentPage === "Academicas" && <Academicas />}
          {this.state.currentPage === "Voluntario" && <Voluntario />}

        </div>

      </div>

    );
  }
}

export default App;
