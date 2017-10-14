import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CircularProgress} from "material-ui";
import * as api from './api'
import {connect} from 'react-redux'
import actions from './redux/actions'

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
                <h4>categories</h4>
                {this.props.categoryNames.map(category => (
                    <p key={category}>{category}</p>
                ))}
                <h4>posts</h4>
                {this.props.posts.map(post => (
                    <pre key={post.id}>{JSON.stringify(post, null, 2)}</pre>
                ))}
            </div>
        );
    }
}

export function mapStateToProps(state, ownProps) {
    const {categories, posts} = state
    return {
        categoryNames: Object.values(categories.byId).map(cat => cat.path),
        posts: Object.values(posts.byId)
    }
}

export default connect(
    mapStateToProps,
    actions
)(App)
