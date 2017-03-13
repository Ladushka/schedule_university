'use strict';
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const SUBGROUPS = require('./../../data/data');

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
        this.props.onChange({value: newValue.label, name: 'subgroup'});
    };

    render() {
        return (
            <div className="section faculties">
                <Select
                    name="subgroup"
                    value={this.state.subgroupSelection}
                    options={SUBGROUPS['subgroups']}
                    onChange={this.updateValue}
                    clearable={false}
                    placeholder='Подгруппа'
                />
            </div>
        );
    };
}
;
module.exports = SubgroupNumber;
