import React, {Component} from 'react'
import actions from '../redux/actions'
import {connect} from "react-redux";
import Post from './Post'
import {DESCENDING, Sorter, SorterOption} from "./Sorter";
import "./AllPosts.css"
import EditPost from "./EditPost";

const DATE_FIELD = "timestamp"
const UPVOTES_FIELD = "voteScore"

class AllPosts extends Component {
    state = {
        sorterOptions: [
            new SorterOption("Upvotes", UPVOTES_FIELD),
            new SorterOption("Date", DATE_FIELD),
        ],
        orderedPostIds: []
    }

    getSortedPostIds = () => {
        const latestSortingArgs = this.state.latestSortingArgs;
        if (this.props.posts && latestSortingArgs) {
            const posts = this.props.posts
            const relatedField = latestSortingArgs.selectedOption.field

            let orderedPostIds = posts.sort((a, b) => a[relatedField] - b[relatedField]).map(post => post.id)
            orderedPostIds = latestSortingArgs.orderBy === DESCENDING ? orderedPostIds.reverse() : orderedPostIds

            return orderedPostIds
        } else {
            return []
        }
    }

    onSorterChange = (callbackArgs) => {
        this.setState((state) => {
            return {...state, latestSortingArgs: callbackArgs}
        })
    }

    render() {
        return (
            <div className="container" style={{padding: "1em"}}>
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Sorter title={"Sort Posts"} options={this.state.sorterOptions} onChange={this.onSorterChange}/>
                    </div>
                    <div className="column">
                        {this.getSortedPostIds().map(id => (
                            <div className="space-posts" key={id}>
                                <Post id={id}/>
                                {/*<EditPost id={id}/>*/}
                            </div>
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
        posts: Object.values(posts.byId).filter(post => !post.deleted)
    }
}

export default connect(
    mapStateToProps,
    actions
)(AllPosts)
