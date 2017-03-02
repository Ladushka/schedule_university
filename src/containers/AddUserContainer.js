'use strict';

'use strict';

import React from 'react';
import Student from './../pages/Student'
import AddLectureController from './../containers/AddLectureController'

class AddUserContainer extends React.Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.props.user)
        });
    };

    render() {
        return (
            this.props.user.role == 'student' ?
                <Student sdo={this.props.user.sdo}/> : <AddLectureController/>
        );
    };
}
;
module.exports = AddUserContainer;
