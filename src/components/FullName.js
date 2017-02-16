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
        this.handleChangeInput = this.handleChangeInput.bind(this);
    };

    handleChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.onChange({name: event.target.name, value: event.target.value})
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <p>
                    <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChangeInput}
                        modifier='underbar'
                        float
                        placeholder='First Name'/>
                </p>
                <p>
                    <Input
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChangeInput}
                        modifier='underbar'
                        float
                        placeholder='Last Name'/>
                </p>
                <p>
                    <Input
                        name="patronymic"
                        value={this.state.patronymic}
                        onChange={this.handleChangeInput}
                        modifier='underbar'
                        float
                        placeholder='Patronymic'/>
                </p>
            </section>
        );
    };
}
;
module.exports = FullName;
