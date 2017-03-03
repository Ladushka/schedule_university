'use strict';
import React from 'react';

import StudentInformation from '../components/student/StudentInformation';
import {Page} from 'react-onsenui';
import FullName from '../components/FullName';
import AddStudent from '../components/student/AddStudent';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            sdo: this.props.sdo
        };
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    };

    handleFullNameChange(item) {
        this.setState({
            fullName: item
        });
    };

    render() {
        return (
            <Page>
                <section style={{textAlign: 'center'}}>
                    <FullName onChange={this.handleFullNameChange}/>
                    <StudentInformation/>
                    <AddStudent user={this.state}/>
                </section>
            </Page>
        );

    };

}
;
module.exports = Student;