'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Faculties from './../general components/Faculties';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import 'react-select/dist/react-select.css';
import './../../www/styles/week.css';

class RequestScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faculty: '',
            number: '',
            subgroup_number: '',
            day_of_week: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
    };

    handleFacultyChange(value) {
        this.setState({faculty: value});
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleDayChange(value) {
        this.setState({day_of_week: value});
    }

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
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
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleStudent;

