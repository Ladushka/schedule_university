import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');


import App from './App';
import Unregisted from './rigestration/Unregisted';
import ScheduleStudent from './schedule/ScheduleStudent';
import SignUp from './rigestration/SignUp';
import Student from './rigestration/Student';
import SignIn from './rigestration/SignIn';
import Profile from './student/Profile';
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