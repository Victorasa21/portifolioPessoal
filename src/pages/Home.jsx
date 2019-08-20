import React, { Component } from 'react';
import foto from "../images/foto_Victor.jpg"

class Home extends Component {
    render() {
        return (
            <div>

                <div className="header">
                    <h1>Victor Augusto Santos Almeida</h1>
                    <h2>Um pouco sobre a minha história.....</h2>
                </div>
                <div className="circle">
                    <img src={foto} alt="blabla" />
                </div>
                <div className="content">
                    <h2 className="content-subhead">How to use this layout</h2>
                    <p>
                        To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> className that makes the menu responsive.
                </p>

                </div>

            </div>
        )
    }
}

export default Home;