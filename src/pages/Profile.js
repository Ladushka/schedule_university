'use strict';

import React from 'react';
import './../../www/styles/profile.css';
import {
    Page,
    Toolbar,
    ListItem,
    Row,
    Col,
    List,
    BackButton,
    ToolbarButton,
    Icon,
    Tabbar,
    Tab,
    Button,
    AlertDialog
} from 'react-onsenui';
import SignOut from '../components/general/SignOut';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        };
        console.log(this.state.user)
    };

    // // pause(1000);
    pause(ms) {
        var date = new Date();
        var curDate = null;
        do {
            curDate = new Date();
        }
        while (curDate - date <= ms);
    };

    componentWillMount() {
        var socket = new WebSocket("ws://localhost:8080/bla");
        console.log(this.state.user.sdo);
        var self = this;

        socket.onopen = function () {
            if (localStorage.getItem('role') == 'student') {
                socket.send(self.state.user.sdo);
            } else {
                socket.send(self.state.user.login);
            }
            console.log("получилось");
        };

        socket.onerror = function (event) {
            console.log(event.message);
        };

        socket.onclose = function (event) {
            console.log(event.code)
        };

        socket.onmessage = function (event) {
            console.log(event.data);
            localStorage.setItem('changes', event.data);
        };
    }

    deleteChanges(){
        localStorage.setItem("changes",'[]');
    }

    render() {
        this.pause(1000);
        console.log('test');
        return (<Page modifier="shop-details">
            <div className="card">
                {localStorage.getItem('role') === 'student' ? (
                        <section>
                            <div
                                className="card-name">Студент
                            </div>
                            <div className="card-desc"> {this.state.user.sdo}<br/></div>
                        </section>
                    ) : (
                        <section>
                            <div
                                className="card-name">Преподователь
                            </div>
                            <div className="card-desc">{this.state.user.login}<br/></div>
                        </section>
                    )}
            </div>
            <List style={{borderTop: 'none'}}><ListItem style={{lineHeight: 1, padding: 0}}>
                <Row class="action">
                    {localStorage.getItem('changes') == '[]' ?
                        (
                            <Col class="action-col">
                                <div className="action-icon">
                                    <Icon icon="ion-chatbubble"/>
                                </div>
                                <div className="action-label">Обновления</div>
                            </Col>
                        ) : (
                            <Col class="action-col">
                                <div className="action-icon">
                                    <Icon className='cool' icon="ion-chatbubble" onClick={this.deleteChanges}/>
                                </div>
                                <div className="action-label">Обновления</div>
                            </Col>)
                    }

                    <Col class="action-col">
                        <div className="action-icon">
                            {
                                localStorage.getItem('role') === 'student' ? (
                                        <a href={`/schedule/${this.state.user.group.faculty}/${this.state.user.group.number}`}>
                                            <Icon icon="ion-calendar"/>
                                        </a>
                                    ) : (
                                        <a href={`/schedule/${this.state.user.surname}`}>
                                            <Icon icon="ion-calendar"/>
                                        </a>
                                    )
                            }
                        </div>
                        <div className="action-label">Расписание</div>
                    </Col>

                    <Col class="action-col">
                        <div className="action-icon"><Icon icon="ion-compose"/></div>
                        <div className="action-label">Изменить профиль</div>
                    </Col>

                </Row>
            </ListItem></List>

            <List style={{borderTop: 0}}>
                <ListItem modifier="chevron tappable">
                    <div className="prop-desc">
                        <Icon icon="ion-android-contact" style={{marginRight: '10px'}}/>
                        {this.state.user.surname} {this.state.user.name}
                    </div>
                </ListItem>

                <ListItem modifier="chevron tappable">
                    <div className="prop-desc">
                        <Icon icon="ion-university" style={{marginRight: '10px'}}/>
                        {localStorage.getItem('changes')}
                    </div>
                </ListItem>
            </List>
            <SignOut/>
        </Page>);
    };
}
;
module.exports = Profile;