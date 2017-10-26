import React, {Component} from 'react'
import {connect} from "react-redux";
import actions from '../App/actions'
import {Card, CardActions, CardHeader, CardText, Dialog, RaisedButton} from "material-ui";
import {DOWN_VOTE, UP_VOTE} from "../api/index";
import EditPost from "./EditPost";
import {withRouter} from "react-router-dom";

class Post extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    vote = (status) => this.props.voteOnPost(this.props.post, status)
    removePost = () => this.props.deletePost(this.props.post)
    navigateToDetails = () => this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`)

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
                    <RaisedButton label="Upvote" onClick={() => this.vote(UP_VOTE)}/>
                    <RaisedButton label="Downvote" onClick={() => this.vote(DOWN_VOTE)}/>
                    <RaisedButton label="Edit" onClick={this.handleOpen}/>
                    <RaisedButton label="Delete" onClick={this.removePost}/>
                    <RaisedButton label="Details" onClick={this.navigateToDetails}/>
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

function mapStateToProps(state, myProps) {
    const {posts} = state
    const post = posts.byId[myProps.id]
    return {...myProps, post}
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(Post))
