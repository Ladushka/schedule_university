import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');


import App from './App';
import UserType from './rigestration/userType';
import Schedule from './schedule/Schedule';

ReactDOM.render((
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={UserType}/>
            <Route path="/schedule" component={Schedule}/>
            <Route path="/about" component={App}/>
        </Router>
    </div>
    ),
    document.getElementById('app')
);