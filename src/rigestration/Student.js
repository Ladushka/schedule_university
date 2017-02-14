'use strict';
import React from 'react';

import Faculties from './../general components/Faculties';
import NumberOfGroup from './../general components/NumberOfGroup';
import {Page} from 'react-onsenui';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faculties: [{value: '', label: ''}],
            number: ''
        };
        this.handleFacultiesChange = this.handleFacultiesChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
    };

    handleGroupChange(value) {
        this.setState({
            number: value
        });
    };

    handleFacultiesChange(value) {
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
                <Faculties onChange={this.handleFacultiesChange}/>
                <NumberOfGroup onChange={this.handleGroupChange} options={this.state.faculties}/>
            </Page>
        );

    };

}
;
module.exports = Student;