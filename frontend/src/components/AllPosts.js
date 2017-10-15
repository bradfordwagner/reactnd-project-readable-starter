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
        console.log(this.state)
        return (
            <div className="container">
                <Sorter title={"My Sorter"} options={this.state.sorterOptions}/>
                {this.props.postIds.map(id => (
                    <Post id={id} key={id}/>
                ))}
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
