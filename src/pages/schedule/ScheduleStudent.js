'use strict';
import './../../../www/styles/schedule.css';
import React from 'react';
import {Page, Button, Toolbar, Input, List, ListItem, Row, Col, Icon, Tab, Tabbar, Fab} from 'react-onsenui';
import {browserHistory} from 'react-router'
const SCHEDULE = require('../../data/data');

class ScheduleStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            schedule: []
        };

    };
    componentWillMount(){
        fetch('http://localhost:8080/lessons/faculty/' + localStorage.getItem('faculty') + '/group/' + localStorage.getItem('group'))
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                this.setState({
                    schedule: JSON.parse(text),
                    isLoading: true
                });

            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    };

    renderRow(row, index) {
        console.log('ayy');
        console.log(this.state.schedule);
            return (
                <ListItem modifier="chevron tappable" class="plan" key={index}>
                    <Row>
                        <Col width="80px" class="plan-left">
                            <div className="plan-duration">1h 20min</div>
                        </Col>
                        <Col width="6px" class="plan-center">
                        </Col>
                       /* <Col class="plan-right">
                            <div className="plan-name">{item.subject_name}</div>
                            <div className="plan-info">
                                <div>
                                    <Icon className="plan-icon" icon="ion-android-person"/>
                                    {item.lecturer.surname} {item.lecturer.name} {item.lecturer.patronymic}
                                </div>
                                <div>
                                    <Icon className="plan-icon" icon="fa-map-marker"/>
                                    {item.lecture_hall}
                                </div>
                                <div>
                                    <Icon className="plan-icon" icon="ion-ios-compose"/>
                                    {item.type}
                                </div>
                            </div>
                        </Col>*/
                    </Row>
                </ListItem>
            );

    };

    goHome() {
        browserHistory.push({
            pathname: '/'
        });
    };

    render() {
        return this.state.isLoading==true ?(
            <Page>
                <div className="navigation-bar">
                    <div className="navigation-bar__center">
                        <div className="button-bar" style={{width: 200 + 'px', margin: '8px auto 0'}}>
                            <div className="button-bar__item">
                                <div className="button-bar__button">{this.props.routeParams.facultyId}</div>
                            </div>
                            <div className="button-bar__item">
                                <div className="button-bar__button">{this.props.routeParams.groupId}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <List class="plan-list"
                      dataSource={[1, 2]}
                      renderRow={this.renderRow}/>
                <Fab position='bottom right' className="fab" onClick={this.goHome}><Icon class="zmdi zmdi-home"/></Fab>
            </Page>
        ):(<div>blaaaa</div>)
    };
}
;
module.exports = ScheduleStudent;
