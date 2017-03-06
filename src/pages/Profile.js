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
    Button
} from 'react-onsenui';
import SignOut from './../components/SignOut';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        };
    };

    render() {
        return (
            <div>

                <Page modifier="shop-details">
                    <Toolbar modifier="transparent">
                        <div className="left">
                            <ToolbarButton><Icon icon="ion-arrow-left-c" style={{color: 'white', fontSize: 28 + 'px'}}
                                                 fixed-width="false"/></ToolbarButton>
                        </div>
                    </Toolbar>

                    <div className="card">
                        {localStorage.getItem('role') === 'student' ? (
                                <section>
                                    <div
                                        className="card-name">Student
                                    </div>
                                    < div className="card-desc"> {this.state.user.sdo}<br/></div>
                                </section>
                            ) : (
                                <section>
                                    <div
                                        className="card-name">Lecturer
                                    </div>
                                    < div className="card-desc">{this.state.user.login}<br/></div>
                                </section>
                            )}

                    </div>

                    <List style={{borderTop: 'none'}}><ListItem style={{lineHeight: 1, padding: 0}}>
                        <Row class="action">

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-chatbubble"/></div>
                                <div className="action-label">Messages</div>
                            </Col>

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
                                <div className="action-label">Schedule</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-compose"/></div>
                                <div className="action-label">Edit Profile</div>
                            </Col>

                        </Row>
                    </ListItem></List>

                    <List style={{borderTop: 0}}>
                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="ion-android-contact"/>
                                {this.state.user.surname} {this.state.user.name}
                            </div>
                        </ListItem>

                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="ion-university"/>
                                {this.state.user.name}
                            </div>
                        </ListItem>
                    </List>
                    <SignOut/>
                </Page>
            </div>
        );
    };
}
;
module.exports = Profile;