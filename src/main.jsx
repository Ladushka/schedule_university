import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'

require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');
import  './../node_modules/onsenui/js/onsenui.js';


import App from './App';
import Main from './pages/Main';
import ScheduleContainer from './containers/ScheduleContainer';
import SignUp from './pages/SignUp';
import Student from './pages/Student';
import SignIn from './pages/SignIn';
import WithoutRegistration from './pages/WithoutRegistration';
import ProfileContainer from './pages/../containers/ProfileContainer';
import './../www/styles/general.css';

ReactDOM.render((
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Main}/>
                <Route path="/schedule/:facultyId/:groupId" component={ScheduleContainer}/>
                <Route path="/schedule/:surname" component={ScheduleContainer}/>
                <Route path="/scheduleContainer" component={ScheduleContainer}/>
                <Route path="/about" component={App}/>
                <Route path="/withoutRegistration" component={WithoutRegistration}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path='/signIn/:login' component={ProfileContainer}/>

                <Route path="/student/:sdoId" component={Student}/>

            </Router>
        </div>
    ),
    document.getElementById('app')
);