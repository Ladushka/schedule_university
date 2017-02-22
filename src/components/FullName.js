'use strict';
import React from 'react';
import {Input} from 'react-onsenui';

class FullName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            patronymic: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChange(this.state);
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <p>
                    <Input
                        type='text'
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleInputChange}
                        modifier='underbar'
                        placeholder='Last Name'/>
                </p>
                <p>
                    <Input
                        type='text'
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        modifier='underbar'
                        placeholder='First Name'/>
                </p>
                <p>
                    <Input
                        type='text'
                        name="patronymic"
                        value={this.state.patronymic}
                        onChange={this.handleInputChange}
                        modifier='underbar'
                        placeholder='Patronymic'/>
                </p>
            </section>
        );
    };
}
;
module.exports = FullName;
