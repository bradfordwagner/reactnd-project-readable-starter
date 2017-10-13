import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CircularProgress} from "material-ui";
import * as api from './api'
import {connect} from 'react-redux'
import {CategoryActions} from './redux/actions'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    setCategories = categories => this.props.dispatch(CategoryActions.setCategories(categories))

    componentDidMount() {
        api.getAllCategories().then(categories => this.setCategories(categories))
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
                {this.props.categoryNames.map(category => (
                    <p key={category}>{category}</p>
                ))}
                <pre>{this.props.categoryNames}</pre>
            </div>
        );
    }
}

export function mapStateToProps(state, ownProps) {
    const {categories} = state
    console.info('mapStateToProps', categories)
    // debugger
    return {
        categoryNames: Object.values(categories).map(cat => cat.path)
    }
}

export default connect(
    mapStateToProps
)(App)
