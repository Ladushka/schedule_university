'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import Faculties from './../general components/Faculties';
import 'react-select/dist/react-select.css';
import './../../www/styles/week.css';

class RequestScheduleLecturer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            faculty: '',
            day_of_week: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleDayChange(value) {
        this.setState({
            day_of_week: value
        })
    };

    handleFacultyChange(value) {
        this.setState({
            faculty: value
        })
    }

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                <p>
                    <Input
                        type="text"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleInputChange}
                        modifier='material'
                        placeholder='Full Name'
                    />
                </p>
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleLecturer;
