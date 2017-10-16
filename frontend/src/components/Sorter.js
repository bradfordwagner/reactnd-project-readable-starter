import React, {Component} from 'react'
import {Card, CardHeader, MenuItem, SelectField} from "material-ui";

export class Sorter extends Component {
    state = {}

    componentDidMount() {
        console.info("mounted")
        this.setState((state, props) => {
            return {
                selectedValue: props.options[0].name ? props.options[0].name : "nothing"
            }
        })
    }

    render() {
        return (
            <Card>
                <CardHeader title={this.props.title}/>

                <div className="card-inset">
                    <SelectField
                        floatingLabelText="sort by"
                        value={this.state.selectedValue}
                        onChange={this.handleChange}
                        autoWidth={true}
                    >
                        {this.props.options.map((option, index) => (
                            <MenuItem value={option.name} primaryText={option.name}/>
                        ))}
                    </SelectField>
                </div>
            </Card>
        )
    }
}

export class SorterOption {
    constructor(name) {
        this.name = name
    }
}
