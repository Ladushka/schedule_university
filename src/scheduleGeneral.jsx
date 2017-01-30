'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, ListItem} from 'react-onsenui';
import {notification} from 'onsenui';

class scheduleGeneral extends React.Component {
    getData() {
        return {
            checkbox: [
                'student',
                'lecturer'
            ],
            student: [
                'faculty',
                'group',
                'subgroup',
                'day_of_week'
            ],
            lecturer: [
                'name',
                'day_of_week'
            ],
            selectedItem: 'student'
        };

    };

    handleItemChange(item) {
        this.setState({selectedItem: item});
    };

    renderRadioRow(row) {
        return (
            // <ListItem key={row} tappable>
            //     <label className='left'>
            //         <Input
            //             inputId={`radio-${row}`}
            //             checked={row === this.state.selectedItem}
            //             onChange={this.handleItemChange.bind(this, row)}
            //             type='radio'
            //         />
            //     </label>
            //     <label htmlFor={`radio-${row}`} className='center'>
            //         {row}
            //     </label>
            // </ListItem>
            <ul>
                <li>this.getData().student</li>
            </ul>
        );
    };

    render() {
        return (
            // <Page renderToolbar={this.renderToolbar}>
            // <List
            //     dataSource={this.state.checkbox}
            //     renderRow={this.renderRadioRow}
            // />
            // </Page>
            <h1>blaaa</h1>
        );
    };
};
module.exports = scheduleGeneral;