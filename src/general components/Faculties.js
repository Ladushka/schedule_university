'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const FACULTIES = require('../data/data');

class Faculties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            facultySelection: '',
            faculty: ''
        };
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(newValue) {
        console.log(newValue.label);
        this.setState({
            facultySelection: newValue,
            faculty: newValue.label
        });
    };

    render() {
        return (
            <div className="section">
                <Select
                    name="faculty"
                    value={this.state.facultySelection}
                    options={FACULTIES['faculties']}
                    onChange={this.updateValue}
                    clearable={false}
                    placeholder='Faculty'
                />
            </div>
        );
    };
}
;
module.exports = Faculties;
