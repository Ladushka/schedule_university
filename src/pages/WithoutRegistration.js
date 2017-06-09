'use strict';

import React from 'react';
import {Page, Toolbar, Input, List, ListItem, ListHeader} from 'react-onsenui';
import SelectorDayOfWeek from  '../components/general/SelectorDayOfWeek';
import StudentInformation from  '../components/student/StudentInformation';
import FullName from  '../components/general/FullName';
import UserType from '../components/general/UserType';
import ShowSchedule from '../components/ShowSchedule';
import Back from '../components/general/Back';

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
                <div>Без Регистрации</div>
            </Toolbar>
        );
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

    componentDidMount() {
        let socket = new WebSocket("ws://localhost:8080/bla");
        socket.onopen = function () {
            socket.send("anything");
            console.log("получилось");
        };
    }

    render() {
        sessionStorage.setItem('role', this.state.selectedItem);

        return (
            <Page renderToolbar={this.renderToolbar}>
                <div class="center">
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
                    <Back/>
                </div>
            </Page>
        );
    };

}
;
module.exports = Unregisted;