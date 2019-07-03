import React, {Component} from 'react';
import Menu from '../utils/Menu';



class Skills extends Component {
    render(){
        return(
            <div id= "menu">
                <Menu/>
                <div className = "pure-menu">
                    <div className = "App">Página de skills</div>
                </div>                
            </div>            
        )
    }
}

export default Skills;