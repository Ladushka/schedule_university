'use strict';

import React from 'react';
import './../../www/styles/profile.css';
import {Page, Toolbar, ListItem, Row, Col, List, BackButton, ToolbarButton, Icon, Tabbar, Tab} from 'react-onsenui';

class Profile extends React.Component {
    render() {
        return (
            <div>
                {/*<Tabbar>*/}
                    {/*<Tab page="page.html" icon="ion-search" label="Find a place" active="true">*/}
                    {/*</Tab>*/}
                    {/*<Tab page="page.html" icon="ion-heart" label="Favorites">*/}
                    {/*</Tab>*/}
                    {/*<Tab page="page.html" icon="ion-person" label="Profile">*/}
                    {/*</Tab>*/}
                {/*</Tabbar>*/}


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

                        <div className="card-name">Onsen Sushi</div>
                        <div className="card-desc">Traditional Japanese Sushi<br/>Open until 10:30pm</div>

                    </div>

                    <List style={{borderTop: 'none'}}><ListItem style={{lineHeight: 1, padding: 0}}>
                        <Row class="action">

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-ios-star-half"/></div>
                                <div className="action-label">Rate</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-bookmark"/></div>
                                <div className="action-label">Favorite</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-share"/></div>
                                <div className="action-label">Share</div>
                            </Col>

                            <Col class="action-col">
                                <div className="action-icon"><Icon icon="ion-compose"/></div>
                                <div className="action-label">Check In</div>
                            </Col>

                        </Row>
                    </ListItem></List>

                    <List style={{borderTop: 0}}>
                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="fa-map-marker"/>
                                2-15-13 Hongo Bunkyo Tokyo
                            </div>
                        </ListItem>

                        <ListItem modifier="chevron tappable">
                            <div className="prop-desc">
                                <Icon icon="fa-mobile"/>
                                (111) 123-4567
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