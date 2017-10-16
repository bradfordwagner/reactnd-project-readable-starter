import React, {Component} from 'react';
import './App.css';
import * as api from './api'
import {connect} from 'react-redux'
import actions from './redux/actions'
import './index.css'
import Navigation from "./components/navigation";
import {Tab, Tabs} from "material-ui";
import AllPosts from "./components/AllPosts";

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
                <Tabs>
                    <Tab label="All Posts">
                        <AllPosts/>
                    </Tab>
                </Tabs>
                <div className="container">
                    <h4>categories</h4>
                    {this.props.categoryNames.map(category => (
                        <p key={category}>{category}</p>
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
