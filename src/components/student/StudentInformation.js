'use strict';

import React from 'react';
import Faculties from './Faculties';
import NumberOfGroup from './NumberOfGroup';
import SubgroupNumber from './SubgroupNumber';

class StudentInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subgroup:'',
            faculties: [{value: '', label: ''}],
        };

        this.handleFacultiesChange = this.handleFacultiesChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(item) {
        sessionStorage.setItem(item.name,item.value);
    };

    handleFacultiesChange(value) {
        sessionStorage.setItem('faculty',value);
        fetch('http://localhost:8080/groups/faculty/' + value)
            .then(response => {
                return response.text();
            })
            .then(text => {
                console.log('Request successful', text);
                this.setState({
                    faculties: JSON.parse(text).map(item => {
                        return {value: item.number, label: item.number}
                    })
                });
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    };

    render() {
        return (
            <section style={{textAlign: 'center'}}>
                <Faculties onChange={this.handleFacultiesChange}/>
                <NumberOfGroup onChange={this.handleChange} options={this.state.faculties}/>
                <SubgroupNumber onChange={this.handleChange}/>
            </section>
        );
    };
}
;
module.exports = StudentInformation;
