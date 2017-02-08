import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');


import App from './App';
import UserType from './rigestration/userType';
import ScheduleStudent from './schedule/ScheduleStudent';

ReactDOM.render((
    <div>
        <Router history={browserHistory}>
            <Route path="/" component={UserType}/>
            <Route path="/schedule/:facultyId/:groupId" component={ScheduleStudent}/>
            <Route path="/about" component={App}/>
        </Router>
    </div>
    ),
    document.getElementById('app')
);