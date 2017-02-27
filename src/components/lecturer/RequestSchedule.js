'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem} from 'react-onsenui';
import SelectorDayOfWeek from './../SelectorDayOfWeek';
import RequestScheduleButton from '../RequestScheduleButton';
import Faculties from '../student/Faculties';

import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-select/dist/react-select.css';
import 'react-bootstrap-typeahead/css/ClearButton.css';
import 'react-bootstrap-typeahead/css/Loader.css';
import 'react-bootstrap-typeahead/css/Token.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './../../../www/styles/week.css';
const NAMES = require('../../data/data');

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

    handleInputChange(value) {
        this.setState({
            surname: value[0]
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
        var options = NAMES['myData'];
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                <div className="lecturer-name">
                <Typeahead
                    name='surname'
                    labelKey='surname'
                    multiple
                    options={options}
                    onChange={this.handleInputChange}
                    placeholder='Choose you name...'
                />
                </div>
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleLecturer;
