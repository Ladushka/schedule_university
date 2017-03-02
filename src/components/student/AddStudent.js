'use strict';
import React from 'react';
import {Button} from 'react-onsenui';
import {withRouter} from 'react-router'
import AddStudentContainer from './../../containers/AddStudentContainer'

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit() {
        this.setState({
            onClick: true
        });
        delete this.props.user.faculties;

        for (let item in this.props.user.fullName) {
            this.setState({
                [item]: this.props.user.fullName[item]
            });
        }
        ;
        this.setState({
            id:0,
            sdo: this.props.user.sdo,
            subgroup: sessionStorage.getItem('subgroup')
        });

        // localStorage.setItem('student', JSON.stringify(this.props.student));
        // localStorage.setItem('logged-in',true);
        // event.preventDefault();
        //
        // this.props.router.push({
        //     pathname: '/profile/'
        // });
    };

    render() {
        return (
            <section>
                <p>
                    <Button className='button-request' onClick={this.handleSubmit}>Save</Button>
                </p>
                {
                    this.state.onClick == true ? <AddStudentContainer student={this.state}/> : (null)
                }
            </section>
        );
    };
}
;
module.exports = withRouter(AddStudent);