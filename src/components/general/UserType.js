import React from 'react';
import {Input, List, ListItem, ListHeader} from 'react-onsenui';

class UserType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [
                'студент',
                'преподователь'
            ],
            selectedItem: 'студент'
        };

        this.renderRadioRow = this.renderRadioRow.bind(this);
    }


    handleItemChange(item) {
        this.setState({selectedItem: item});
        let userType = item === 'студент' ? 'student' : 'lecturer';
        this.props.onChange(userType);
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
                renderHeader={() => <ListHeader>Тип пользователя</ListHeader>}
                renderRow={this.renderRadioRow}/>
        );
    };

}
;
module.exports = UserType;
