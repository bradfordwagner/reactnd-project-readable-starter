import React, {Component} from 'react';
import './App.css';
import * as api from './api'
import {connect} from 'react-redux'
import actions from './redux/actions'
import './index.css'
import Navigation from "./components/Navigation";
import TabNavigation from "./components/TabNavigation";
import {withRouter} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backend: 'backend-data'
        }
    }

    componentDidMount() {
        api.getAllCategories().then(categories => this.props.setCategories(categories))
        api.getAllPosts().then(results => this.props.addPosts(results))
    }

    render() {
        return (
            <div className="App">
                <Navigation/>
                <TabNavigation/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const {categories, posts} = state
    return {
        categoryNames: Object.values(categories.byId).map(cat => cat.path),
        posts: Object.values(posts.byId)
    }
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(App))
