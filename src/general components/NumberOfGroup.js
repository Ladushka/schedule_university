'use strict';

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Input} from 'react-onsenui';

class NumberOfGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupSelection: ''
        };
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(newValue) {
        this.setState({
            groupSelection: newValue
        });
        this.props.onChange({value: newValue.label, name: 'number'});
    };

    render() {
        return (
            <div className="section faculties">
                <Select
                    name="group_numbers"
                    value={this.state.groupSelection}
                    options={this.props.options}
                    onChange={this.updateValue}
                    clearable={false}
                    placeholder='Group number'
                />
            </div>
        );
    };
}
;
module.exports = NumberOfGroup;
