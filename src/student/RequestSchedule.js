'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

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
        // this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    render() {
        return (
                <section style={{textAlign: 'center'}}>
                    <p>
                        <Input
                            type="text"
                            name="faculty"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            modifier='material'
                            //float
                            placeholder='Faculty'
                        />
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
};
module.exports = RequestScheduleStudent;

