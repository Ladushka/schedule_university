import React from 'react';

import {Page, Button, Toolbar, Input} from 'react-onsenui';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_id: 0,
            faculty: '',
            number: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Form input</div>
            </Toolbar>
        );
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        fetch('http://localhost:8080/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        });
        event.preventDefault();
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>
                        <Input
                            type="text"
                            name="faculty"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            modifier='material'
                            placeholder='Faculty'
                        />
                    </p>
                    <p>
                        <Input
                            type="text"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleInputChange}
                            modifier='material'
                            placeholder='Number'
                        />
                    </p>
                    <p>
                        <Button onClick={this.handleSubmit}>Add Group</Button>
                    </p>
                </section>
            </Page>
        );
    };
};
module.exports = App;