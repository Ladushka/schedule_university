'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

class RequestScheduleLecturer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            faculty: '',
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
                        value={this.state.faculty}
                        onChange={this.handleInputChange}
                        modifier='material'
                        //float
                        placeholder='Faculty'
                    />
                </p>
                <p>
                    <Input
                        type="text"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleInputChange}
                        modifier='material'
                        // float
                        placeholder='Full Name'
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
module.exports = RequestScheduleLecturer;
