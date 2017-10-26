import React, {Component} from 'react'
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";

class Categories extends Component {
    render = () => (
        <div className="container">
            <section className="section slide-down">
                <div className="container">
                    <h1 className="title">All Categories</h1>
                </div>
                <hr/>
            </section>
            {this.props.categoryNames.map((category, index) => (
                <li key={category} className="slide-down" style={{'animation-delay': this.calculateAnimationDelay(index)}}><Link to={`/${category}`}>{category}</Link></li>
            ))}
        </div>
    )

    calculateAnimationDelay = offset => `${100 * offset}ms`
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
