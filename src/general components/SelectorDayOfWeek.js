'use strict';
import './../../www/styles/week.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

const WEEK = require('../data/data');

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
    };

    renderButton() {
        return WEEK['week'].map(item => {
            return (
                <div className="button-bar__item" key={item}>
                    <input type="radio" name="segment-a" onChange={this.changeDay.bind(this, item)}/>
                    <button className="button-bar__button">{item}</button>
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
