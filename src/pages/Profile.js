'use strict';

import React from 'react';
import './../../www/styles/profile.css';
import {Page, Toolbar, ListItem, Row, Col, List, BackButton, ToolbarButton, Icon, Tabbar, Tab} from 'react-onsenui';
const STUDENT = require('../data/data');

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            student:STUDENT['student']
        };
        console.log(STUDENT['student']);
    }
    render() {
        console.log(STUDENT['student']);
        return (
            <div>

                <Page modifier="shop-details">
                    <Toolbar modifier="transparent">
                        <div className="right">
                            <ToolbarButton><Icon icon="ion-ios-chatboxes" style={{color: 'white'}}/></ToolbarButton>
                        </div>
                        <div className="left">
                            <ToolbarButton><Icon icon="ion-arrow-left-c" style={{color: 'white', fontSize: 28+'px'}}
                                                 fixed-width="false"/></ToolbarButton>
                        </div>
                    </Toolbar>

                    <div className="card">

                        <div className="card-name">Student</div>
                        <div className="card-desc">{this.props.routeParams.login}<br/></div>

                    </div>

                    <List style={{borderTop: 'none'}}><ListItem style={{lineHeight: 1, padding: 0}}>
                        <Row class="action">

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-chatbubble"/></div>
                                <div className="action-label">Messages</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-calendar"/></div>
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
                                <Icon icon="fa-map-marker"/>
                                {this.state.student.surname}  {this.state.student.name}
                            </div>
                        </ListItem>

                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="fa-mobile"/>
                                {this.state.student.name}
                            </div>
                        </ListItem>

                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="fa-book"/>
                                Store Photos and Menus
                            </div>
                        </ListItem>

                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="fa-clock-o"/>
                                Make a Reservation
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