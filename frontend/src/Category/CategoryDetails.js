import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import actions from '../App/actions'
import PostsWithSorter from "../Post/PostsWithSorter";

class CategoryDetails extends Component {
    componentDidMount() {
        if (this.props.categoryName) {
            this.props.loadPostsForCategory(this.props.categoryName)
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
