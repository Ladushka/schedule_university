'use strict';
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const SUBGROUPS = require('./../data/data');

class SubgroupNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subgroupSelection: ''
        };
        this.updateValue = this.updateValue.bind(this);
    };

    updateValue(newValue) {
        this.setState({
            subgroupSelection: newValue
        });
        this.props.onChange({value: newValue.label, name: 'subgroup_number'});
    };

    render() {
        return (
            <div className="section faculties">
                <Select
                    name="subgroup_number"
                    value={this.state.subgroupSelection}
                    options={SUBGROUPS['subgroups']}
                    onChange={this.updateValue}
                    clearable={false}
                    placeholder='Subgroup number'
                />
            </div>
        );
    };
}
;
module.exports = SubgroupNumber;
