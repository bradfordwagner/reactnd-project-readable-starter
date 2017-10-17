import React, {Component} from 'react'
import {connect} from "react-redux";
import actions from '../redux/actions'
import {Card, CardActions, CardHeader, CardText, FlatButton} from "material-ui";
import {voteOnPost} from '../api'
import {deletePost, DOWN_VOTE, UP_VOTE} from "../api/index";

class Post extends Component {
    vote = (status) => voteOnPost(this.props.post, status).then(post => this.props.updatePost(post))
    removePost = () => deletePost(this.props.post).then(post => this.props.removePost(post))

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.post.title}
                    subtitle={`${new Date(this.props.post.timestamp).toLocaleString()} by ${this.props.post.author}`}
                />
                <CardText>
                    {this.props.post.body}
                    <p>Upvotes: {this.props.post.voteScore}</p>
                </CardText>
                <CardActions>
                    <FlatButton label="Upvote" onClick={() => this.vote(UP_VOTE)}/>
                    <FlatButton label="Downvote" onClick={() => this.vote(DOWN_VOTE)}/>
                    <FlatButton label="Edit"/>
                    <FlatButton label="Delete" onClick={this.removePost}/>
                    <FlatButton label="Details"/>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps(state, myProps) {
    const {posts} = state
    const post = posts.byId[myProps.id]
    return {...myProps, post}
}

export default connect(
    mapStateToProps,
    actions
)(Post)