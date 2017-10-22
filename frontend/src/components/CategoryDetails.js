import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import API from '../api'
import actions from '../redux/actions'
import Post from './Post'

class CategoryDetails extends Component {
    componentDidMount() {
        if (this.props.categoryName) {
            API.getPostsForCategory(this.props.categoryName).then(posts => this.props.addPosts(posts))
        }
    }

    render = () => (
        <div className="container">
            <section className="section">
                <div className="container">
                    <h1 className="title">Posts for '{this.props.categoryName}'</h1>
                </div>
                <hr/>
            </section>
            <div>
                {this.props.postIds.map(postId => (
                    <div className="space-posts" key={postId}>
                        <Post id={postId}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state, myProps) {
    const categoryName = myProps.match.params.category;
    const postIds = Object.values(state.posts.byId).filter(post => post.category === categoryName).map(post => post.id)
    return {categoryName, postIds}
}

export default withRouter(connect(mapStateToProps, actions)(CategoryDetails))
