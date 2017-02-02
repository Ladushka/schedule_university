'use strict';
import './../../www/styles/week.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

const WEEK = require('../data/data');

class SelectorDayOfWeek extends React.Component {
    constructor(props) {
        super(props);
        this.renderButton = this.renderButton.bind(this);

    };
    renderButton() {
       return WEEK['week'].map(function (item) {
           return (
               <div className="button-bar__item" key={item}>
                   <input type="radio" name="segment-a" checked/>
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
