import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');
import  './../node_modules/onsenui/js/onsenui.js';


import App from './App';
import Unregisted from './pages/Unregisted';
import ScheduleStudent from './pages/schedule/ScheduleStudent';
import SignUp from './pages/SignUp';
import Student from './pages/Student';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import './../www/styles/general.css';

ReactDOM.render((
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={Unregisted}/>
            <Route path="/schedule/:facultyId/:groupId" component={ScheduleStudent}/>
            <Route path="/about" component={App}/>
            <Route path="/sign" component={SignUp}/>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/student/:sdoId" component={Student}/>
            <Route path="/profile" component={Profile}/>
        </Router>
    </div>
    ),
    document.getElementById('app')
);