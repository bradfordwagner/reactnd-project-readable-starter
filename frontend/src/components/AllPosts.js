import React, {Component} from 'react'
import actions from '../redux/actions'
import {connect} from "react-redux";
import Post from './post'
import {Sorter, SorterOption} from "./Sorter";

class AllPosts extends Component {
    state = {
        sorterOptions: [
            new SorterOption("Date"),
            new SorterOption("Score")
        ]
    }

    render() {
        return (
            <div className="container" style={{padding: "1em"}}>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Sorter title={"Sort Posts"} options={this.state.sorterOptions} />
                    </div>
                    <div className="column">
                        {this.props.postIds.map(id => (
                            <Post id={id} key={id}/>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, myProps) {
    const {posts} = state
    return {
        postIds: Object.values(posts.byId).map(post => post.id)
    }
}

export default connect(
    mapStateToProps,
    actions
)(AllPosts)
