import React from 'react';
import {Page, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

import RequestScheduleStudent from  './../student/RequestSchedule'
import RequestScheduleLecturer from  './../student/RequestSchedule'

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
                <List
                    dataSource={this.state.user}
                    renderHeader={()=><ListHeader>Who are you?</ListHeader>}
                    renderRow={this.renderRadioRow}/>
                <RequestScheduleStudent id='student' />

            </Page>
        );
    };

}
;
module.exports = UserType;