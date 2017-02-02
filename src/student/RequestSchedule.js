'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Select from 'react-select';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
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
            subgroup_number: '',
            day_of_week: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateValue = this.updateValue.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        console.log(FACULTIES['faculties']);
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
                <p>
                    <Input
                        type="text"
                        name="day_of_week"
                        value={this.state.day_of_week}
                        onChange={this.handleInputChange}
                        modifier='material'
                        placeholder='Day Of Week'
                    />
                </p>
                <SelectorDayOfWeek />
                <p>
                    <Button onClick={this.handleSubmit}>Show Schedule</Button>
                </p>
            </section>
        );
    };

    /*  handleSubmit(event) {
     console.log(this.state);
     fetch('http://localhost:8080/groups', {
     method: 'POST',
     headers: {
     'Content-Type': 'application/json'
     },
     body: JSON.stringify(this.state)
     });
     event.preventDefault();
     };*/
}
;
module.exports = RequestScheduleStudent;

