'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader, Icon} from 'react-onsenui';
import Faculties from './../general components/Faculties';
import NumberOfGroup from './../general components/NumberOfGroup';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './../../www/styles/week.css';
const SUBGROUPS = require('../data/data');

class RequestScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faculty: '',
            number: '',
            subgroup_number: '',
            day_of_week: '',
            subgroupSelection: '',
            faculties: [{value: '', label: ''}],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
    };

    handleFacultyChange(value) {
        this.setState({faculty: value});
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
    }
    handleGroupChange(value){
        this.setState({
            number: value
        });
    };
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleDayChange(value) {
        this.setState({day_of_week: value});
    };

    updateValue(newValue) {
        this.setState({
            subgroupSelection: newValue,
            subgroup_number: newValue.label
        });
    };

    render() {

        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                <NumberOfGroup onChange={this.handleGroupChange} options={this.state.faculties}/>
                <div className="section faculties">
                    <Select
                        name="subgroup_number"
                        value={this.state.subgroupSelection}
                        options={SUBGROUPS['subgroups']}
                        onChange={this.updateValue}
                        clearable={false}
                        placeholder='Subgroup number'
                    />
                </div>
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleStudent;

