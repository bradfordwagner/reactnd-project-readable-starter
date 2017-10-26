import React, {Component} from 'react'
import actions from '../App/actions'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PostsWithSorter from "./PostsWithSorter";

class AllPosts extends Component {
    render = () => (
        <PostsWithSorter ids={this.props.postIds} title="All Posts" subtitle="Browse all of the posts, and have a great time."/>
    )
}

function mapStateToProps(state, myProps) {
    const {posts} = state
    return {
        postIds: Object.values(posts.byId).filter(post => !post.deleted).map(post => post.id)
    }
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(AllPosts))
