import React from 'react';
import {Page, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import SelectorDayOfWeek from  '../components/SelectorDayOfWeek';
import StudentInformation from  '../components/student/StudentInformation';
import FullName from  '../components/FullName';
import UserType from '../components/UserType';
import ShowSchedule from '../components/ShowSchedule'
class Unregisted extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: 'student'
        };
        this.userTypeChange = this.userTypeChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Schedule without login</div>
            </Toolbar>
        );
    };

    componentDidMount() {
        localStorage.clear();
        localStorage.setItem('logged-in', false);
    };

    userTypeChange(value) {
        this.setState({selectedItem: value});
    };

    handleChange(value) {
        this.setState({
            user: value
        });
    };

    handleDayChange(day) {
        this.setState({
            day_of_week: day.value
        })
    };

    render() {
        sessionStorage.setItem('role', this.state.selectedItem);
        return (
            <Page renderToolbar={this.renderToolbar}>
                <UserType onChange={this.userTypeChange}/>
                <section style={{textAlign: 'center'}}>
                    {this.state.selectedItem == 'student' ? (
                            <StudentInformation onChange={this.handleChange}/>
                        ) : (
                            <FullName onChange={this.handleChange}/>
                        )}
                    <SelectorDayOfWeek onChange={this.handleDayChange}/>
                    <ShowSchedule request={this.state}/>
                </section>
            </Page>
        );
    };

}
;
module.exports = Unregisted;