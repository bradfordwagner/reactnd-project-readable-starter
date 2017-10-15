import React from 'react'
import actions from '../redux/actions'
import {connect} from "react-redux";
import Post from './post'

class AllPosts extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.postIds.map(id => (
                    <Post id={id} key={id}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state, myProps) {
    const {posts} = state
    return {
        postIds: Object.values(posts.byId).map(post => post.id)
    }
}

export default connect(
    mapStateToProps,
    actions
)(AllPosts)
