import React, {Component} from 'react'
import {connect} from "react-redux";
import {Card, CardActions, RadioButton, RadioButtonGroup, RaisedButton, TextField} from "material-ui";
import UUID from '../util/UUID'
import actions from '../App/actions'

class EditPost extends Component {
    state = {
        post: {
            author: "",
            body: "",
            category: "react",
            deleted: false,
            id: UUID(),
            timestamp: Date.now(),
            title: "",
            voteScore: 1
        },
        title: "Create Post"
    }

    isEditing = () => this.props.id !== undefined

    savePostInBackend = () => {
        const promise = this.isEditing()
            ? this.props.updatePost(this.state.post)
            : this.props.saveNewPost(this.state.post)
        promise.then(() => this.invokeDialogClose())
    }

    invokeDialogClose = () => {
        if (this.props.closeDialog) {
            this.props.closeDialog()
        }
    }

    componentDidMount() {
        // sets up post for editing if it came from props, however this will not update it if the store changes
        const post = this.props.post;
        if (post) {
            this.setState({post, title: "Edit Post"})
        }
    }

    updateField = (field, value) => {
        this.setState({
            post: {
                ...this.state.post,
                [field]: value
            }
        })
    }

    render() {
        const isEditing = this.isEditing()
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
                        onChange={(event, value) => this.updateField('title', value)}
                        fullWidth={true}
                        floatingLabelText="Title"
                        value={this.state.post.title}
                    />
                    <TextField
                        onChange={(event, value) => this.updateField('author', value)}
                        disabled={isEditing}
                        floatingLabelText="Author"
                        value={this.state.post.author}
                    />

                    <div className="grid">
                        <p>Category</p>
                        <RadioButtonGroup name="Category" defaultSelected={this.state.post.category} onChange={(event, value) => this.updateField('category', value)}>
                            {this.props.categories.map(category => (
                                <RadioButton key={category}
                                             value={category}
                                             label={category}
                                             disabled={isEditing}
                                />
                            ))}
                        </RadioButtonGroup>
                    </div>

                    <TextField
                        rows={5}
                        fullWidth={true}
                        multiLine={true}
                        floatingLabelText="Body"
                        value={this.state.post.body}
                        onChange={(event, value) => this.updateField('body', value)}
                    />
                </div>
                <CardActions>
                    <RaisedButton label="Save" onClick={() => this.savePostInBackend()}/>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps({posts, categories}, {id}) {
    const post = posts.byId[id]
    return {post, categories: categories.names}
}

export default connect(
    mapStateToProps,
    actions
)(EditPost)
