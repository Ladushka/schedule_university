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

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(localStorage.getItem('user'));
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
            // faculty: localStorage.getItem('faculty'),
            // group: localStorage.getItem('group')
        };
    };

    render() {
        return (
            <div>

                <Page modifier="shop-details">
                    <Toolbar modifier="transparent">
                        <div className="right">
                            <ToolbarButton><Icon icon="ion-ios-chatboxes" style={{color: 'white'}}/></ToolbarButton>
                        </div>
                        <div className="left">
                            <ToolbarButton><Icon icon="ion-arrow-left-c" style={{color: 'white', fontSize: 28 + 'px'}}
                                                 fixed-width="false"/></ToolbarButton>
                        </div>
                    </Toolbar>

                    <div className="card">

                        <div className="card-name">Student</div>
                        <div className="card-desc">{this.state.user.login}<br/></div>

                    </div>

                    <List style={{borderTop: 'none'}}><ListItem style={{lineHeight: 1, padding: 0}}>
                        <Row class="action">

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-chatbubble"/></div>
                                <div className="action-label">Messages</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon">
                                    {/*<a href={`/schedule/${this.state.faculty}/${this.state.group}`}>*/}
                                        {/*<Icon icon="ion-calendar"/>*/}
                                    {/*</a>*/}
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

                </Page>
            </div>
        );
    };
}
;
module.exports = Profile;