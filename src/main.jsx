import 'react-hot-loader/patch';
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

// Onsen UI Styling and Icons
require('onsenui/stylus/blue-basic-theme.styl');
require('onsenui/css/onsenui.css');

import App from './App';
import UserType from './rigestration/userType';

ReactDOM.render(
    <div>
        <UserType />
    </div>,
    document.getElementById('app')
);