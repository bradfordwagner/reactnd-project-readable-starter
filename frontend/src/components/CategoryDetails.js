import React, {Component} from 'react'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CategoryDetails extends Component {
    render = () => (
        <div>
            <p> category details - {this.props.categoryName}</p>
        </div>
    )
}

function mapStateToProps(state, myProps) {
    const category = myProps.match.params.category;
    console.info('category', category)
    return {categoryName: category}
}

export default withRouter(connect(mapStateToProps, null)(CategoryDetails))
