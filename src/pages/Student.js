'use strict';
import React from 'react';

import Faculties from '../components/student/Faculties';
import NumberOfGroup from '../components/student/NumberOfGroup';
import SubgroupNumber from '../components/student/SubgroupNumber';
import {Page} from 'react-onsenui';
import FullName from '../components/FullName';
import AddStudent from '../components/student/AddStudent';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            surname: '',
            patronymic: '',
            faculties: [{value: '', label: ''}],
            faculty: '',
            group_number: '',
            group_id: '',
            subgroup_number: '',
            sdo_id: this.props.routeParams.sdoId
        };
        this.handleFacultiesChange = this.handleFacultiesChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    };

    handleChange(item) {
        //console.log(this.props.routeParams.sdoId);
        this.setState({
            [item.name]: item.value
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
        this.setState({
            [item.name]: item.value
        });
    };

    handleFacultiesChange(value) {
        this.setState({
            faculty: value
        });
        localStorage.setItem('faculty', value);
        fetch('http://localhost:8080/groups/faculty/' + value)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                this.setState({
                    faculties: JSON.parse(text).map(item => {
                        return {value: item.number, label: item.number}
                    })
                });
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });

    };

    render() {
        return (
            <Page>
                <section style={{textAlign: 'center'}}>
                    <FullName onChange={this.handleFullNameChange}/>
                    <Faculties onChange={this.handleFacultiesChange}/>
                    <NumberOfGroup onChange={this.handleChange} options={this.state.faculties}/>
                    <SubgroupNumber onChange={this.handleChange}/>
                    <AddStudent student={this.state}/>
                </section>
            </Page>
        );

    };

}
;
module.exports = Student;