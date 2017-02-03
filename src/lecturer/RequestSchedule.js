'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import Faculties from './../general components/Faculties';

class RequestScheduleLecturer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            faculty: '',
            day_of_week: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                    <Faculties />
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
                <SelectorDayOfWeek />
                <RequestScheduleButton />
            </section>
        );
    };
}
;
module.exports = RequestScheduleLecturer;
