import React, {Component} from 'react'
import {connect} from "react-redux";
import actions from '../redux/actions'
import {Card, CardActions, CardHeader, CardText, FlatButton} from "material-ui";

class Post extends Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.post.title}
                    subtitle={this.props.post.author}
                />
                <CardText>{this.props.post.body}</CardText>
                <CardActions>
                    <FlatButton label="Upvote"/>
                    <FlatButton label="Downvote"/>
                    <FlatButton label="Edit"/>
                    <FlatButton label="Delete"/>
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