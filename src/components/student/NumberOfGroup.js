'use strict';

import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class NumberOfGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupSelection: 'Group number'
        };
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(newValue) {
        this.setState({
            groupSelection: newValue
        });
        this.props.onChange({value: newValue.label, name: 'group_number'});
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
                    placeholder='Номер группы'
                />
            </div>
        );
    };
}
;
module.exports = NumberOfGroup;
