'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader, Icon} from 'react-onsenui';
import Faculties from './../general components/Faculties';
import NumberOfGroup from './../general components/NumberOfGroup';
import SubgroupNumber from './../general components/SubgroupNumber';
import SelectorDayOfWeek from './../general components/SelectorDayOfWeek';
import RequestScheduleButton from './../general components/RequestScheduleButton';
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
            faculties: [{value: '', label: ''}],
        };

        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSubgroupChange = this.handleSubgroupChange.bind(this);

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

    handleGroupChange(value) {
        this.setState({
            number: value
        });
    };

    handleDayChange(value) {
        this.setState({day_of_week: value});
    };

    handleSubgroupChange(value) {
        this.setState({
            subgroup_number: value
        })
    };

    render() {

        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                <NumberOfGroup onChange={this.handleGroupChange} options={this.state.faculties}/>
                <SubgroupNumber onChange={this.handleSubgroupChange}/>
                <SelectorDayOfWeek onChange={this.handleDayChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleStudent;

