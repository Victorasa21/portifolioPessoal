import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render(){
        return (
    <div>
        <div id="layout">
        <Link to ="/" id="menuLink" className="menu-link"> </Link>
        </div>

            <div className="header">
                <h1>Victor Augusto Santos Almeida</h1>
                <h2>Um pouco sobre a minha história.....</h2>
            </div>

            <div id="menu">
                <div className="pure-menu">
                    <Link to ="/" className="pure-menu-heading"> Home </Link>

                    <ul className="pure-menu-list">
                        <li className="pure-menu-item"><a onClick={() => this.props.changePage("Skills")}>Minhas Skills</a></li>
                        <li className="pure-menu-item"><a onClick={() => this.props.changePage("Profissionais")}>Experiências Profissionais</a></li>
                        <li className="pure-menu-item"><Link to="/Academicas"className="pure-menu-link">Experiências Acadêmicas</Link></li>
                        <li className="pure-menu-item"><Link to="/Voluntario"className="pure-menu-link">Trabalhos Voluntários</Link></li>

                    </ul>
                </div>  
            </div>  
    </div>
        )
    }
}
export default Menu;