import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import actions from './actions'
import '../index.css'
import Navigation from "../Navigation/Navigation";
import TabNavigation from "../Navigation/TabNavigation";
import {withRouter} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        this.props.loadCategories()
        this.props.loadAllPosts()
    }

    render = () => (
        <div className="App">
            <Navigation/>
            <TabNavigation/>
        </div>
    )
}

export default withRouter(connect(
    null,
    actions
)(App))
