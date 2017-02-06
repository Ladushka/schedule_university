'use strict';
import './../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, ListHeader, Row, Col} from 'react-onsenui';

class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: []
        };
        //this.handleSubmit = this.handleSubmit.bind(this);
    };


    render() {
        return (

            <Page>
                {/*<Toolbar>*/}
                {/*<div className="left">*/}
                {/*</div>*/}
                {/*<div className="center">*/}
                {/*Schedule*/}
                {/*</div>*/}
                {/*<div className="right">*/}
                {/*</div>*/}
                {/*</Toolbar>*/}


                <List class="plan-list">
                    <ListItem modifier="chevron tappable" class="plan" ng-repeat="a in [1,2,3,4,5,6,7,8,9,10]">
                        <Row>
                            <Col width="80px" class="plan-left">
                                <div className="plan-date">5:30 PM</div>
                                <div className="plan-duration">1h</div>
                            </Col>

                            <Col width="6px" class="plan-center"
                                 ng-style="{backgroundColor:a % 3 == 1 ? '#3399ff' : '#ccc'}">
                            </Col>

                            <Col class="plan-right">
                                <div className="plan-name">Onsen UI Meetup</div>
                                <div className="plan-info">
                                    {/*<div ng-hide="a % 4 == 0">*/}
                                    {/*<Icon className="plan-icon" icon="fa-phone"></Icon>123-456-789*/}
                                    {/*</div>*/}

                                    {/*<div ng-hide="a % 3 == 0">*/}
                                    {/*<Icon className="plan-icon" icon="fa-map-marker"></Icon>Moscone, San Francisco*/}
                                    {/*</div>*/}
                                </div>
                            </Col>
                        </Row>
                    </ListItem>
                </List>
            </Page>
        );
    };
};
module.exports = Schedule;
