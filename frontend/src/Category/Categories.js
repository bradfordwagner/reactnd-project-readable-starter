import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

class Categories extends Component {
    render = () => (
        <div className="container">
            <section className="section">
                <div className="container">
                    <h1 className="title">All Categories</h1>
                </div>
                <hr/>
            </section>
            {this.props.categoryNames.map(category => (
                <li key={category}><Link to={`/${category}`}>{category}</Link></li>
            ))}
        </div>
    )
}

function mapStateToProps({categories}, myProps) {
    return {
        categoryNames: categories.names
    }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(Categories))
