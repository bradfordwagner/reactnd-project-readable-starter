import React, {Component} from 'react'
import actions from '../redux/actions'
import {connect} from "react-redux";
import {Card, CardActions, CardHeader, CardText, Dialog, RaisedButton} from "material-ui";
import EditComment from "./EditComment";
import API, {UP_VOTE, DOWN_VOTE} from '../api'

class Comment extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    vote = (upOrDown) => {
        API.voteOnComment(this.props.comment, upOrDown).then(comment => this.props.updateComment(comment))
    }

    deleteComment = () => {
        API.deleteComment(this.props.comment).then(comment => this.props.updateComment(comment))
    }

    formatDate = () =>  this.props.comment.timestamp ? new Date(this.props.comment.timestamp).toLocaleString() : ""

    render = () => (
        <Card>
            <CardHeader
                title={this.props.comment.author}
                subtitle={this.formatDate()}
            />
            <CardText>
                {this.props.comment.body}
            </CardText>
            <CardText>
                Upvotes: {this.props.comment.voteScore}
            </CardText>

            <CardActions>
                <RaisedButton label="Upvote" onClick={() => this.vote(UP_VOTE)}/>
                <RaisedButton label="Downvote" onClick={() => this.vote(DOWN_VOTE)}/>
                <RaisedButton label="Edit" onClick={this.handleOpen}/>
                <RaisedButton label="Delete" onClick={this.deleteComment}/>
            </CardActions>

            <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                bodyStyle={{padding: "0px", "overflow-x": "hidden"}}
            >
                <EditComment id={this.props.comment.id} closeDialog={() => this.handleClose()} parentId={this.props.postId}/>
            </Dialog>
        </Card>
    )
}

function mapStateToProps(state, myProps) {
    const {comments} = state
    const comment = comments.byId[myProps.id]
    return {comment}
}

export default connect(mapStateToProps, actions)(Comment)
