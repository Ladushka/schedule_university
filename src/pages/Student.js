'use strict';
import React from 'react';

import Faculties from '../components/Faculties';
import NumberOfGroup from '../components/NumberOfGroup';
import SubgroupNumber from '../components/SubgroupNumber';
import {Page, Button} from 'react-onsenui';
import FullName from '../components/FullName';

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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
    };

    handleChange(item) {
        console.log(this.props.routeParams.sdoId);
        this.setState({
            [item.name]: item.value
        });
        if (item.name == 'group_number') {
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

    handleSubmit() {
        delete this.state.faculties;
        delete this.state.group_number;
        fetch('http://localhost:8080/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .catch(function (error) {
                console.log('Request failed', error)
            });
        event.preventDefault();
    };

    render() {
        return (
            <Page>
                <section style={{textAlign: 'center'}}>
                    <FullName onChange={this.handleFullNameChange}/>
                    <Faculties onChange={this.handleFacultiesChange}/>
                    <NumberOfGroup onChange={this.handleChange} options={this.state.faculties}/>
                    <SubgroupNumber onChange={this.handleChange}/>
                    <p>
                        <Button className="button-request" onClick={this.handleSubmit}>Save</Button>
                    </p>
                </section>
            </Page>
        );

    };

}
;
module.exports = Student;