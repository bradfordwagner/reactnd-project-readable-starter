import React, {Component} from 'react'
import {connect} from "react-redux";
import {Card, CardHeader, TextField} from "material-ui";
import AutoComplete from 'material-ui/AutoComplete';
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
        }
    }

    componentDidMount() {
        // sets up post for editing if it came from props, however this will not update it if the store changes
        const post = this.props.post;
        if (post) {
            this.setState((state) => {
                return {...state, post}
            })
        }
    }

    updateField = (event, value) => {
        debugger
    }

    render() {
        return (
            <Card>
                <CardHeader title="Edit Post"/>
                <pre>post - {JSON.stringify(this.state.post, null, 2)}</pre>
                <pre>categories - {JSON.stringify(this.props.categories, null, 2)}</pre>

                <TextField
                    onChange={this.updateField}
                    floatingLabelText="Title"
                    value={this.state.post.title}
                />
                <TextField
                    floatingLabelText="Author"
                    value={this.state.post.author}
                />

                <AutoComplete
                    floatingLabelText="Category"
                    filter={AutoComplete.caseInsensitiveFilter}
                    dataSource={this.props.categories}
                />
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