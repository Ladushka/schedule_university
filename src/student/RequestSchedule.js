'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class RequestScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faculty: '',
            number: '',
            subgroup_number: '',
            day_of_week: '',
            faculties: [
                {name: 'faculty', value: 'юф', label: 'ЮФ'},
                {name: 'faculty', value: 'миит', label: 'МиИТ'},
                {name: 'faculty', value: 'бф', label: 'БФ'}
            ]
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event) {
        console.log(event);
        this.setState({
            [event.name]: event.label
        });
    };


    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <p>
                    <Select
                        name="faculty"
                        value={this.state.name}
                        options={this.state.faculties}
                        onChange={this.handleInputChange}

                    />
                    {/*<Input*/}
                    {/*type="text"*/}
                    {/*name="faculty"*/}
                    {/*value={this.state.name}*/}
                    {/*onChange={this.handleInputChange}*/}
                    {/*modifier='material'*/}
                    {/*//float*/}
                    {/*placeholder='Faculty'*/}
                    {/*/>*/}
                </p>
                <p>
                    <Input
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleInputChange}
                        modifier='material'
                        // float
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
                        // float
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
                        // float
                        placeholder='Day Of Week'
                    />
                </p>
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

