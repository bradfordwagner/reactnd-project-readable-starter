import React, {Component} from 'react'
import {connect} from "react-redux";

class EditPost extends Component {
    render() {
        return (
            <div>
                <p>edit post</p>
                <p>{this.props.post.title}</p>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    const {id} = props
    const {posts} = state
    const post = posts.byId[id]
    console.info('edit post', post)
    return {post}
}

export default connect(
    mapStateToProps,
    null
)(EditPost)