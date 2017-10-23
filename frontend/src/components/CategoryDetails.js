import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import API from '../api'
import actions from '../redux/actions'
import PostsWithSorter from "./PostsWithSorter";

class CategoryDetails extends Component {
    componentDidMount() {
        if (this.props.categoryName) {
            API.getPostsForCategory(this.props.categoryName).then(posts => this.props.addPosts(posts))
        }
    }

    render = () => (
        <div className="container">
            <PostsWithSorter ids={this.props.postIds} title={`Posts for '${this.props.categoryName}'`}/>
        </div>
    )
}

function mapStateToProps(state, myProps) {
    const categoryName = myProps.match.params.category;
    const postIds = Object.values(state.posts.byId).filter(post => post.category === categoryName && !post.deleted).map(post => post.id)
    return {categoryName, postIds}
}

export default withRouter(connect(mapStateToProps, actions)(CategoryDetails))
