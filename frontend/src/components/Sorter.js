import React, {Component} from 'react'
import {Card, CardHeader, CardTitle} from "material-ui";

export class Sorter extends Component {
    render() {
        return (
            <Card>
                <CardHeader title={this.props.title}/>
                {this.props.options.map(option => (
                    <p>{option.name}</p>
                ))}
                <p>sorter</p>
            </Card>
        )
    }
}

export class SorterOption {
    constructor(name) {
        this.name = name
    }
}
