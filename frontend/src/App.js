import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {CircularProgress} from "material-ui";
import * as api from './api'
import {connect} from 'react-redux'
import actions from './redux/actions'
import Post from "./components/post";

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
                <h4>categories</h4>
                {this.props.categoryNames.map(category => (
                    <p key={category}>{category}</p>
                ))}
                <h4>posts</h4>
                <div className="posts">
                    {this.props.posts.map(post => (
                        <Post id={post.id} key={post.id}/>
                    ))}
                </div>
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
