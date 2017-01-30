import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input, List, ListItem} from 'react-onsenui';
import {notification} from 'onsenui';

class Test extends React.Component {
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


    }


    handleItemChange(item) {
        this.setState({selectedItem: item});
    };


    render() {

        return (
                <List
                    dataSource={this.state.user}
                    renderRow={(row)=>(
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
                    )}
                />
        );
    };

}
;
module.exports = Test;