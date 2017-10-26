import React, {Component} from 'react'
import {Route, Switch, withRouter} from "react-router-dom";
import {Tab, Tabs} from "material-ui";
import AllPosts from "../Post/AllPosts";
import Categories from '../Category/Categories'
import CategoryDetails from "../Category/CategoryDetails";
import PostDetails from "../Post/PostDetails";

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
                    <Tab
                        label="Categories"
                        value="/categories">
                    </Tab>
                </Tabs>

                <Switch>
                    <Route path="/" exact component={AllPosts}/>
                    <Route path="/categories" exact component={Categories}/>
                    <Route path="/:category" exact component={CategoryDetails}/>
                    <Route path="/:category/:postId" component={PostDetails}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(TabNavigation)
