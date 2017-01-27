import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Input} from 'react-onsenui';
import {notification} from 'onsenui';

// export default class App extends React.Component {
//   alertPopup() {
//     notification.alert('This is an Onsen UI alert notification test.');
//   }
//
//   renderToolbar() {
//     return (
//       <Toolbar>
//         <div className='center'>Onsen UI</div>
//       </Toolbar>
//     );
//   }
//
//   render() {
//     return (
//       <Page renderToolbar={this.renderToolbar}>
//         <div>Hello World!</div>
//         <Button onClick={this.alertPopup}>Click Me!</Button>
//       </Page>
//     );
//   }
// }
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
        //const value = event.target.value
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
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
        //alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>
                        {/*<form className="loginForm" onSubmit={this.handleSubmit}>*/}
                        <Input
                            type="text"
                            name="faculty"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            modifier='material'
                            //float
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
                           // float
                            placeholder='Number'
                        />
                    </p>
                    <p>
                        <Button onClick={this.handleSubmit}>Add Group</Button>
                    </p>
                    {/*<Input type="submit" value="Login"/>*/}
                    {/*</form>*/}
                </section>
            </Page>
        );
    };
}
;
module.exports = App;