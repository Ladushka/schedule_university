'use strict';

'use strict';

import React from 'react';
import AddUser from './../components/AddUser'

class AddUserContainer extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        /*запрос*/
    };

    render() {
        return (
            <AddUser/>
        );
    };
}
;
module.exports = AddUserContainer;
