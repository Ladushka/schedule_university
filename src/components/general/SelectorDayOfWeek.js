'use strict';

import React from 'react';
import '../../../www/styles/week.css'
const WEEK = require('../../data/data');

class SelectorDayOfWeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day_of_week: '',
            faculty: '',
            number: '',
            subgroup_number: ''
        };
        this.renderButton = this.renderButton.bind(this);

    };

    changeDay(item) {
        this.setState({
            day_of_week: item
        });
        this.props.onChange({value: item, name: 'day_of_week'});
    };

    renderButton() {
        return WEEK['week'].map(item => {
            return (
                <div className="button-bar__item_my" key={item.name}>
                    <input type="radio" name="segment-a" onChange={this.changeDay.bind(this, item.value)}/>
                    <button className="button-bar__button_my">{item.name}</button>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="button-bar" style={{width: 280 + 'px', margin: 'auto'}}>
                {this.renderButton()}
            </div>
        );
    };

}
;
module.exports = SelectorDayOfWeek;
