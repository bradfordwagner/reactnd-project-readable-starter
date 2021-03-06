import React, {Component} from 'react'
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import Post from './Post'
import actions from '../App/actions'
import {CircularProgress, Dialog, IconButton} from "material-ui";
import EditComment from "../Comment/EditComment";
import Comment from "../Comment/Comment";
import {Plus} from "../Icons/Plus";
import "./PostDetails.css"

class PostDetails extends Component {
    state = {
        open: false,
        isLoading: true
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    componentDidMount() {
        this.props.getPost(this.props.postId).then(() => this.setState({isLoading: false})).catch(() => this.setState({isLoading: false}))
        this.props.loadCommentsForPost(this.props.postId)
    }

    render = () => (
        <div className="container normal-padding">
            {this.renderPage()}
        </div>
    )

    renderPage = () => {
        return this.state.isLoading
            ? this.renderLoadingScreen()
            : this.props.post
                ? this.renderPostDetails()
                : this.redirect()
    }

    redirect = () => (
        <Redirect to="/"/>
    )

    renderLoadingScreen = () => (
        // not sure we really want this since it loads so fast
        <CircularProgress />
    )

    manualRedirect = () => {
        this.props.history.push('/')
    }

    renderPostDetails = () => (
        <div>
            <div className="pad-bottom slide-down">
                <Post id={this.props.postId} deleteCallback={this.manualRedirect}/>
            </div>
            <div className="pad-bottom">
                <section className="section slide-down small-section-padding" style={{'animation-delay': this.calculateAnimationDelay(1)}}>
                    <div>
                        <h2 className="subtitle allow-in-same-line small">
                            Comments
                        </h2>
                        <IconButton onClick={this.handleOpen} tooltip="Add Comment" tooltipPosition="top-center"><Plus/></IconButton>
                    </div>
                    <hr/>
                </section>

                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={{padding: "0px", "overflow-x": "hidden"}}
                >
                    <EditComment closeDialog={() => this.handleClose()} parentId={this.props.postId}/>
                </Dialog>

                {this.props.commentIds.map((id, index) => (
                    <div key={id} className="space-posts slide-down" style={{'animation-delay': this.calculateAnimationDelay(1 + index)}}>
                        <Comment id={id} closeDialog={() => this.handleClose()}/>
                    </div>
                ))}
            </div>
        </div>
    )

    calculateAnimationDelay = offset => `${100 * offset}ms`
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
