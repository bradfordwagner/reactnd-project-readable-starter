import React, {Component} from 'react'
import {connect} from "react-redux";
import {Card, CardActions, CardHeader, RadioButton, RadioButtonGroup, RaisedButton, TextField} from "material-ui";
import UUID from '../util/UUID'

class EditPost extends Component {
    state = {
        post: {
            author: "unknown",
            body: "Some body here",
            category: "react",
            deleted: false,
            id: UUID(),
            timestamp: Date.now(),
            title: "Brad is the best",
            voteScore: 1
        },
        title: "Create Post"
    }

    componentDidMount() {
        // sets up post for editing if it came from props, however this will not update it if the store changes
        const post = this.props.post;
        if (post) {
            this.setState({...this.state, post, title: "Edit Post"})
        }
    }

    updateField = (field, value) => {
        this.setState({
            ...this.state,
            post: {
                ...this.state.post,
                [field]: value
            }
        })
    }

    render() {
        return (
            <Card>
                <CardHeader title={this.state.title}/>
                <div className="card-inset container grid">
                    <TextField
                        onChange={(event, value) => this.updateField('title', value)}
                        fullWidth={true}
                        floatingLabelText="Title"
                        value={this.state.post.title}
                    />
                    <TextField
                        onChange={(event, value) => this.updateField('author', value)}
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
                    <RaisedButton label="Save"/>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps(state, props) {
    const {id} = props
    const {posts, categories} = state
    const post = posts.byId[id]
    return {post, categories: Object.values(categories.byId).map(category => category.name)}
}

export default connect(
    mapStateToProps,
    null
)(EditPost)
