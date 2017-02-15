'use strict';

import React from 'react';
import './../../www/styles/profile.css';
import {Page, Toolbar, ListItem, Row, Col, List, BackButton, ToolbarButton, Icon} from 'react-onsenui';

class Profile extends React.Component {
    render() {
        return (
            <Page>
                <Toolbar>
                    <div className="left">
                        <BackButton>Back</BackButton>
                    </div>
                    <div className="center">Profile</div>
                    <div className="right">
                        <ToolbarButton>
                            <Icon icon="ion-gear-a" style={{verticalAlign: -4 +'px', fontSize: 28+'px'}}/>
                        </ToolbarButton>
                    </div>
                </Toolbar>

                <div className="profile-card">

                    <img src="images/profile-image-01.png" className="profile-image"/>
                    <div className="profile-name">Dave Graham</div>
                    <div className="profile-id">@davegraham</div>
                    <div className="profile-desc">Freelance designer, software engineer and cyclist</div>

                </div>

                <List>
                    <ListItem>
                        <Row>
                            <Col class="info-col">
                                <div className="info-num">87</div>
                                <div className="info-unit">Comments</div>
                            </Col>
                            <Col class="info-col">
                                <div className="info-num">40</div>
                                <div className="info-unit">Following</div>
                            </Col>
                            <Col class="info-col">
                                <div className="info-num">38</div>
                                <div className="info-unit">Followers</div>
                            </Col>
                        </Row>
                    </ListItem>
                </List>

                <List modifier="inset" style={{marginTop: 10+'px'}}>
                    <ListItem modifier="chevron">
                        Write a comment
                    </ListItem>

                    <ListItem modifier="chevron">
                        See details
                    </ListItem>

                    <ListItem modifier="chevron">
                        Save to the list
                    </ListItem>

                </List>


            </Page>
        );
    };
}
;
module.exports = Profile;