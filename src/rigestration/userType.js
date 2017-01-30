import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, List, ListItem} from 'react-onsenui';
import {notification} from 'onsenui';

class UserType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [
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

        this.renderRadioRow = this.renderRadioRow.bind(this);
    }


    handleItemChange(item) {
        this.setState({selectedItem: item});
    };

    renderRadioRow(row) {
        return (
            <ListItem key={row} tappable>
                <label className='left'>
                    <Input
                        inputId={`radio-${row}`}
                        checked={row === this.state.selectedItem}
                        onChange={this.handleItemChange.bind(this, row)}
                        type='radio'
                    />
                </label>
                <label htmlFor={`radio-${row}`} className='center'>
                    {row}
                </label>
            </ListItem>
        )
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Schedule without login</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <div className='center'>Who are you?</div>
                <List
                    dataSource={this.state.user}
                    renderRow={this.renderRadioRow}/>
            </Page>
        );
    };

}
;
module.exports = UserType;