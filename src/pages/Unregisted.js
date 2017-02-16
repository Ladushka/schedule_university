import React from 'react';
import {Page, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';

import RequestScheduleStudent from  '../components/student/RequestSchedule';
import RequestScheduleLecturer from  '../components/lecturer/RequestSchedule';
import UserType from '../components/UserType';
class Unregisted extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.userTypeChange = this.userTypeChange.bind(this);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Schedule without login</div>
            </Toolbar>
        );
    };

    userTypeChange(value) {
        this.setState({selectedItem: value});
    };

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <UserType onChange={this.userTypeChange}/>
                <ListHeader>
                    <div className='center'>Form for search</div>
                </ListHeader>
                {this.state.selectedItem == 'student' ? (
                        <RequestScheduleStudent />
                    ) : (
                        <RequestScheduleLecturer />
                    )}

            </Page>
        );
    };

}
;
module.exports = Unregisted;