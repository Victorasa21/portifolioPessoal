import React, { Component } from 'react';
import 'react-chat-widget/lib/styles.css';
import Chatbot from '../chatbot/Chatbot';

class Menu extends Component {
    render() {
        return (
            <div>
                <div id="menu">
                    <div className="pure-menu">
                        {/* <Link to ="/" className="pure-menu-heading"> Home </Link> */}
                        <span onClick={() => this.props.changePage("Home")} className="pure-menu-heading"> Home </span>

                        <ul className="pure-menu-list">

                            {/* <li className="pure-menu-item"><Link to="/Skills"className="pure-menu-link">Minhas Skills</Link></li> */}
                            <li className="pure-menu-item"><span className="pure-menu-link" onClick={() => this.props.changePage("Skills")}>Minhas Skills</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link" onClick={() => this.props.changePage("Profissionais")}>Experiências Profissionais</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link" onClick={() => this.props.changePage("Academicas")}>Experiências Acadêmicas</span></li>
                            <li className="pure-menu-item"><span className="pure-menu-link" onClick={() => this.props.changePage("Voluntario")}>Trabalhos Voluntários</span></li>
                            {/* <li className="pure-menu-item"><Link to="/Profissionais"className="pure-menu-link">Experiências Profissionais</Link></li>
                        <li className="pure-menu-item"><Link to="/Academicas"className="pure-menu-link">Experiências Acadêmicas</Link></li>
                        <li className="pure-menu-item"><Link to="/Voluntario"className="pure-menu-link">Trabalhos Voluntários</Link></li> */}

                        </ul>
                    </div>
                </div>
                <Chatbot />

            </div>

        )
    }
}
export default Menu;