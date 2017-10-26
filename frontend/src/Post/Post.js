import React, {Component} from 'react'
import {connect} from "react-redux";
import actions from '../App/actions'
import {Card, CardActions, CardHeader, CardText, Dialog, IconButton} from "material-ui";
import {DOWN_VOTE, UP_VOTE} from "../api/index";
import EditPost from "./EditPost";
import {withRouter} from "react-router-dom";
import ThumbUp from "../Icons/ThumbUp";
import ThumbDown from "../Icons/ThumbDown";
import Edit from "../Icons/Edit";
import Delete from "../Icons/Delete";

class Post extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        this.props.loadCommentsForPost(this.props.id)
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    vote = (status) => this.props.voteOnPost(this.props.post, status)
    removePost = () => this.props.deletePost(this.props.post).then(() => this.deleteCallback())
    navigateToDetails = () => this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`)

    deleteCallback = () => {
        if (this.props.deleteCallback) {
            this.props.deleteCallback()
        }
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.post.title}
                    subtitle={`${new Date(this.props.post.timestamp).toLocaleString()} by ${this.props.post.author}`}
                    onClick={this.navigateToDetails}
                    className="finger-pointer"
                />
                <CardText>
                    {this.props.post.body}
                </CardText>
                <CardText>
                    Upvotes: {this.props.post.voteScore}
                </CardText>
                <CardText>
                    Comments: {this.props.commentCount}
                </CardText>
                <CardActions>
                    <IconButton onClick={() => this.vote(UP_VOTE)} tooltip="Upvote"><ThumbUp/></IconButton>
                    <IconButton onClick={() => this.vote(DOWN_VOTE)} tooltip="Downvote"><ThumbDown/></IconButton>
                    <IconButton onClick={this.handleOpen} tooltip="Edit Post"><Edit/></IconButton>
                    <IconButton onClick={this.removePost} tooltip="Delete Post"><Delete/></IconButton>
                </CardActions>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={{padding: "0px", "overflow-x": "hidden"}}
                >
                    <EditPost id={this.props.id} closeDialog={() => this.handleClose()}/>
                </Dialog>
            </Card>
        )
    }
}

function mapStateToProps({posts, comments}, {id}) {
    const post = posts.byId[id]
    const commentCount = Object.values(comments.byId).filter(comment => comment.parentId === id).length
    return {id, post, commentCount}
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(Post))
