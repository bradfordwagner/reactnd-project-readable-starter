import React, {Component} from 'react'
import {Card, CardHeader, MenuItem, RaisedButton, SelectField} from "material-ui";
import ArrowUp from "../icons/ArrowUp";
import ArrowDown from "../icons/ArrowDown";

const ASCENDING = "asc"
const DESCENDING = "desc"

export class Sorter extends Component {
    state = {
        orderBy: ASCENDING
    }

    componentDidMount() {
        this.setState((state, props) => {
            return {
                selectedValue: props.options[0].name ? props.options[0].name : "nothing"
            }
        }, () => this.invokeCallback())
    }

    resolveArrow = () => {
        switch (this.state.orderBy) {
            case ASCENDING:
                return <ArrowUp/>
            case DESCENDING:
                return <ArrowDown/>
            default:
                console.error(`unknown orderBy status - ${this.state.orderBy}`)
                return <span>Unknown state</span>
        }
    }

    toggleOrderBy = (event) => {
        this.setState((state) => {
            return {
                ...state,
                orderBy: state.orderBy !== ASCENDING ? ASCENDING : DESCENDING
            }
        }, () => this.invokeCallback())
    }

    invokeCallback = () => {
        const sorterResponse = new SorterResponse(this.state.selectedValue, this.state.orderBy);
        if (this.props.onChange) {
            this.props.onChange(sorterResponse)
        }
    }

    handleChange = (obj, index, selectedValue) => {
        this.setState((state, props) => {
            return {...state, selectedValue}
        }, () => this.invokeCallback())
    }

    render() {
        return (
            <Card>
                <CardHeader title={this.props.title}/>
                <div className="card-inset container grid">
                    <SelectField
                        floatingLabelText="sort by"
                        value={this.state.selectedValue}
                        onChange={this.handleChange}
                    >
                        {this.props.options.map((option, index) => (
                            <MenuItem value={option.name} primaryText={option.name} key={option.name}/>
                        ))}
                    </SelectField>
                    <div>
                        <span>Order by: </span>
                        <RaisedButton label="" icon={this.resolveArrow()} onClick={this.toggleOrderBy}/>
                    </div>
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

export class SorterResponse {
    constructor(selectedValue, orderBy) {
        this.selectedValue = selectedValue
        this.orderBy = orderBy
    }
}
