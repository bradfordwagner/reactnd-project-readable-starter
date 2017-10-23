import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Post from './Post'
import API from '../api'
import actions from '../redux/actions'
import {Dialog, RaisedButton} from "material-ui";
import EditComment from "./EditComment";
import Comment from "./Comment";

class PostDetails extends Component {
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    componentDidMount() {
        API.getPost(this.props.postId).then(post => this.props.updatePost(post))
        API.getCommentsForPost({id: this.props.postId}).then(comments => this.props.addComments(comments))
    }

    renderPost = () => this.props.post ? <div className="pad-bottom"><Post id={this.props.postId}/></div> : ""

    render = () => (
        <div className="container normal-padding">
            {this.renderPost()}
            <div className="pad-bottom">
                <section className="section">
                    <div className="container">
                        <h2 className="subtitle">
                            Comments
                        </h2>
                    </div>
                    <hr/>
                </section>

                <div className="space-posts">
                    <RaisedButton label="Add" onClick={this.handleOpen}/>
                </div>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={{padding: "0px", "overflow-x": "hidden"}}
                >
                    <EditComment closeDialog={() => this.handleClose()} parentId={this.props.postId}/>
                </Dialog>

                {this.props.commentIds.map(id => (
                    <div key={id} className="space-posts">
                        <Comment id={id} closeDialog={() => this.handleClose()}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state, myProps) {
    const {category, postId} = myProps.match.params
    const {posts, comments} = state
    return {
        category,
        postId,
        post: posts.byId[postId],
        commentIds: Object.values(comments.byId).filter(comment => comment.parentId === postId && !comment.deleted).map(comment => comment.id)
    }
}

export default withRouter(connect(mapStateToProps, actions)(PostDetails))
