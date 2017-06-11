'use strict';

import React from 'react';
import {withRouter} from 'react-router';
import {Fab, Icon} from 'react-onsenui';

class SignOut extends React.Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    };

    pause(ms) {
        var date = new Date();
        var curDate = null;
        do {
            curDate = new Date();
        }
        while (curDate - date <= ms);
    };

    signOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
        localStorage.setItem("logged-in", "false");
        this.pause(1000);
        this.props.router.push({
            pathname: '/'
        });
    };

    render() {
        return (
            <Fab position='right bottom' onClick={this.signOut}>
                <Icon class="fa fa-sign-out"/>
            </Fab>
        );
    };
}
;
module.exports = withRouter(SignOut);
