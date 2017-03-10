'use strict';

import React from 'react';
import {withRouter} from 'react-router';
import {Fab, Icon} from 'react-onsenui';

class Back extends React.Component {

    goHome() {
        history.back();
    };

    render() {
        return (
            <Fab position='bottom left' onClick={this.goHome}><Icon
                class="zmdi zmdi-home"/></Fab>
        );
    };
}
;
module.exports = withRouter(Back);
