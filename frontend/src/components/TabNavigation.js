import React, {Component} from 'react'
import {Route, Switch, withRouter} from "react-router-dom";
import {Tab, Tabs} from "material-ui";
import AllPosts from "./AllPosts";
import Categories from './Categories'
import CategoryDetails from "./CategoryDetails";

class TabNavigation extends Component {
    handleCallToRouter = (value) => {
        console.info('TabNav changed tab', value)
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
                    <Route path="/:category" component={CategoryDetails}/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(TabNavigation)
