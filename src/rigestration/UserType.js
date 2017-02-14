import React from 'react';
import {Page, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

class UserType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [
                'student',
                'lecturer'
            ],
            selectedItem: 'student'
        };

        this.renderRadioRow = this.renderRadioRow.bind(this);
    }


    handleItemChange(item) {
        this.setState({selectedItem: item});
        this.props.onChange(item);
        document.getElementsByName('password')[1].value = '';
        document.getElementById('login').value = '';
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

    render() {
        return (
            <List
                dataSource={this.state.user}
                renderHeader={() => <ListHeader>Who are you?</ListHeader>}
                renderRow={this.renderRadioRow}/>
        );
    };

}
;
module.exports = UserType;
