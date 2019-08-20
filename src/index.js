import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Skills from './pages/Skills.jsx';
import Voluntario from './pages/Voluntario';
import Academicas from './pages/Academicas';
import Profissionais from './pages/Profissionais';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>

            <Route path="/" exact={true} component={App} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Voluntario" component={Voluntario} />
            <Route path="/Academicas" component={Academicas} />
            <Route path="/Profissionais" component={Profissionais} />

        </Switch>

    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
