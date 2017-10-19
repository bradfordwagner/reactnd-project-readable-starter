import React, {Component} from 'react'
import {withRouter} from "react-router-dom";
import {Tab, Tabs} from "material-ui";
import AllPosts from "./AllPosts";

class TabNavigation extends Component {
    handleCallToRouter = (value) => {
        this.props.history.push(value);
        this.forceUpdate()
    }

    render = () => (
        <Tabs
            value={this.props.history.location.pathname}
            onChange={this.handleCallToRouter}>
            <Tab
                label="All Posts"
                value="/">
                <AllPosts/>
            </Tab>
            <Tab
                label="Categories"
                value="/categories">
                <div>
                    <p>categories</p>
                </div>
            </Tab>
        </Tabs>
    )
}

export default withRouter(TabNavigation)
