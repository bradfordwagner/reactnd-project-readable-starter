import React, {Component} from 'react'
import actions from '../App/actions'
import {DESCENDING, Sorter, SorterOption} from "../Sorting/Sorter";
import {Dialog, IconButton} from "material-ui";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import EditPost from './EditPost'
import Post from './Post'
import "./PostsWithSorter.css"
import {Plus} from "../Icons/Plus";

const DATE_FIELD = "timestamp"
const UPVOTES_FIELD = "voteScore"

class PostsWithSorter extends Component {
    state = {
        sorterOptions: [
            new SorterOption("Upvotes", UPVOTES_FIELD),
            new SorterOption("Date", DATE_FIELD),
        ],
        orderedPostIds: [],
        open: false
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
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

    renderSubtitle = () => {
        if (this.props.subtitle) {
            return <h2 className="subtitle">
                {this.props.subtitle}
            </h2>
        } else {
            return ""
        }
    }

    render = () => (
        <div className="container normal-padding">
            <div className="columns">
                <div className="column is-one-quarter expand-down">
                    <div className="space-posts">
                        <Sorter title={"Sort Posts"} options={this.state.sorterOptions} onChange={this.onSorterChange}/>
                    </div>

                    <IconButton onClick={this.handleOpen} tooltip="Add Post"><Plus/></IconButton>
                    <Dialog
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        bodyStyle={{padding: "0px", "overflow-x": "hidden"}}
                    >
                        <EditPost closeDialog={() => this.handleClose()}/>
                    </Dialog>
                </div>
                <div className="column left-offset is-two-thirds expand-down" style={{'animation-delay': '100ms'}}>
                    <section className="section">
                        <div className="container">
                            <h1 className="title">{this.props.title}</h1>
                            {this.renderSubtitle()}
                        </div>
                        <hr/>
                    </section>
                    {this.getSortedPostIds().map(id => (
                        <div className="space-posts" key={id}>
                            <Post id={id}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state, myProps) {
    const {posts} = state
    return {
        posts: myProps.ids.map(id => posts.byId[id]).filter(post => !post.deleted)
    }
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(PostsWithSorter))
