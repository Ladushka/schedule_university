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
            sdo_id: this.props.routeParams.sdoId
        };
        //this.handleFacultiesChange = this.handleFacultiesChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    };

    handleChange(item) {
        console.log(this.state);
        this.setState({
            inf: item
        });
        if (item.name == 'group_number') {
            localStorage.setItem('group', item.value);
            fetch('http://localhost:8080/groups/faculty/' + this.state.faculty + '/number/' + item.value)
                .then(response => {
                    return response.text();
                })
                .then(text => {
                    console.log('Request successful', text);
                    this.setState({
                        group_id: JSON.parse(text).map(item => {
                            return item.group_id
                        })[0]
                    });
                })
                .catch(function (error) {
                    console.log('Request failed', error)
                });
        }
    };

    handleFullNameChange(item) {
        //console.log(this.state);
        this.setState({
            fullName: item
        });
    };

    render() {
        return (
            <Page>
                <section style={{textAlign: 'center'}}>
                    <FullName onChange={this.handleFullNameChange}/>
                    <StudentInformation onChange={this.handleChange}/>
                    <AddStudent user={this.state}/>
                </section>
            </Page>
        );

    };

}
;
module.exports = Student;