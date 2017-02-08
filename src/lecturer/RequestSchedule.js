'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
import Faculties from './../general components/Faculties';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-select/dist/react-select.css';
import 'react-bootstrap-typeahead/css/ClearButton.css';
import 'react-bootstrap-typeahead/css/Loader.css';
import 'react-bootstrap-typeahead/css/Token.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './../../www/styles/week.css';
import 'react-bootstrap';
const NAMES = require('../data/data');

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
        var  options = NAMES['myData'];
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                    <Typeahead
                        multiple
                        options={options}
                        onChange={this.handleInputChange}
                        placeholder="Choose you name..."
                    />
                    {/*<Input*/}
                        {/*type="text"*/}
                        {/*name="surname"*/}
                        {/*value={this.state.surname}*/}
                        {/*onChange={this.handleInputChange}*/}
                        {/*modifier='material'*/}
                        {/*placeholder='Full Name'*/}
                    {/*/>*/}
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleLecturer;
