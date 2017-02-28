'use strict';

import React from 'react';
import {withRouter} from 'react-router';
import {Fab, Icon} from 'react-onsenui';

class SignOut extends React.Component {
    render() {
        return (
            <Fab position='right bottom'>
                <Icon class="fa fa-sign-out"/>
            </Fab>
        );
    };
}
;
module.exports = withRouter(SignOut);
