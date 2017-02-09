'use strict';

import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import 'bootstrap/dist/css/bootstrap.css';

const FACULTIES = require('../data/data');

class Faculties extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            facultySelection: ''
        };
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(newValue) {
        this.setState({
            facultySelection: newValue
        });
        this.props.onChange(newValue.label);

    };

    render() {
        return (
            <div className="section faculties">
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
