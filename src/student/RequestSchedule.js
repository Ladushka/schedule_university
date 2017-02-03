'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Select from 'react-select';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import 'react-select/dist/react-select.css';
import './../../www/styles/week.css';
const FACULTIES = require('../data/data');

class RequestScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            facultySelection: '',
            faculty: '',
            number: '',
            subgroup_number: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    updateValue(newValue) {
        console.log(newValue.label);
        this.setState({
            facultySelection: newValue,
            faculty: newValue.label
        });
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <div className="section">
                    <Select
                        name="faculty"
                        value={this.state.facultySelection}
                        options={FACULTIES['faculties']}
                        onChange={this.updateValue}
                        clearable={false}
                        placeholder='Faculty'
                    />
                </div>
                <p>
                    <Input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        modifier='material'
                        placeholder='Number Of Group'
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        name="subgroup_number"
                        value={this.state.subgroup_number}
                        onChange={this.handleInputChange}
                        modifier='material'
                        placeholder='Subgroup Number'
                    />
                </p>
                <SelectorDayOfWeek request={this.state}/>
                <RequestScheduleButton  />
            </section>
        );
    };
}
;
module.exports = RequestScheduleStudent;

