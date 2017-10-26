import React, {Component} from 'react'
import {Route, Switch, withRouter} from "react-router-dom";
import {Tab, Tabs} from "material-ui";
import AllPosts from "../Post/AllPosts";
import CategoryDetails from "../Category/CategoryDetails";
import PostDetails from "../Post/PostDetails";
import {connect} from "react-redux";

class TabNavigation extends Component {
    handleCallToRouter = (value) => {
        this.props.history.push(value);
    }

    render = () => {
        return (
            <div>
                <Tabs
                    value={this.props.history.location.pathname}
                    onChange={this.handleCallToRouter}>
                    <Tab
                        label="All Posts"
                        value="/">
                    </Tab>
                    {this.props.categoryNames.map(categoryName => (
                        <Tab
                            label={categoryName}
                            value={`/${categoryName}`}>
                        </Tab>
                    ))}

                </Tabs>

                <Switch>
                    <Route path="/" exact component={AllPosts}/>
                    <Route path="/:category" exact component={CategoryDetails}/>
                    <Route path="/:category/:postId" component={PostDetails}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps({categories}) {
    return {categoryNames: categories.names}
}

export default withRouter(connect(mapStateToProps, null)(TabNavigation))
