import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CircularProgress} from "material-ui";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <CircularProgress/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Talking to the backend yields these categories: <br/>
                </p>
            </div>
        );
    }
}

export default App;
