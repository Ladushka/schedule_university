'use strict';

import React from 'react';
import Faculties from './../Faculties';
import NumberOfGroup from '../NumberOfGroup';
import SubgroupNumber from '../SubgroupNumber';
import SelectorDayOfWeek from '../SelectorDayOfWeek';
import RequestScheduleButton from '../RequestScheduleButton';

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
        this.handleFacultyChange = this.handleFacultyChange.bind(this);

        this.handleChange = this.handleChange.bind(this);
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
    };

    handleChange(item) {
        this.setState({
            [item.name]: item.value
        });
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultyChange}/>
                <NumberOfGroup onChange={this.handleChange} options={this.state.faculties}/>
                <SubgroupNumber onChange={this.handleChange}/>
                <SelectorDayOfWeek onChange={this.handleChange}/>
                <RequestScheduleButton request={this.state}/>
            </section>
        );
    };
}
;
module.exports = RequestScheduleStudent;

