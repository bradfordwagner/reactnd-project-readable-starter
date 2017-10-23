import React, {Component} from 'react'
import {connect} from "react-redux";
import {Comment} from '../definitions'
import {Card, CardActions, RaisedButton, TextField} from "material-ui";
import API from '../api'
import actions from '../redux/actions'

class EditComment extends Component {
    state = {
        title: "New Comment",
        comment: new Comment()
    }

    componentDidMount() {
        if (this.props.comment) {
            this.setState({comment: this.props.comment, title: "Edit Comment"})
        }

        if (this.props.parentId) {
            this.setState({
                comment: {
                    ...this.state.comment,
                    parentId: this.props.parentId
                }
            })
        }
    }

    isNewPost = () => this.props.comment === undefined

    updateField = (field, value) => {
        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                timestamp: Date.now(),
                [field]: value
            }
        })
    }

    save = () => {
        if (this.isNewPost()) {
            API.addComment(this.state.comment).then(comment => this.props.updateComment(comment))
        } else {
            API.editComment(this.state.comment).then(comment => this.props.updateComment(comment))
        }

        if (this.props.closeDialog) {
            this.props.closeDialog()
        }
    }

    render = () => {
        const isNewPost = this.isNewPost()
        return (
            <Card>
                <section className="section">
                    <div className="container">
                        <h2 className="subtitle">
                            {this.state.title}
                        </h2>
                    </div>
                    <hr/>
                </section>
                <div className="card-inset grid">
                    <TextField
                        floatingLabelText="Title"
                        fullWidth={true}
                        value={this.state.comment.title}
                        disabled={!isNewPost}
                        onChange={(event, value) => this.updateField('title', value)}
                    />

                    <TextField
                        floatingLabelText="Author"
                        fullWidth={true}
                        value={this.state.comment.author}
                        disabled={!isNewPost}
                        onChange={(event, value) => this.updateField('author', value)}
                    />

                    <TextField
                        floatingLabelText="Body"
                        fullWidth={true}
                        value={this.state.comment.body}
                        onChange={(event, value) => this.updateField('body', value)}
                    />

                </div>
                <CardActions>
                    <RaisedButton label="Save" onClick={this.save}/>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps(state, myProps) {
    const {comments} = state
    const comment = comments.byId[myProps.id]
    return {comment}
}

export default connect(mapStateToProps, actions)(EditComment)
