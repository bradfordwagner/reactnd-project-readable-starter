import React, {Component} from 'react'
import {SvgIcon} from "material-ui";

export default class ArrowDown extends Component {
    render() {
        return (
            <SvgIcon>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </SvgIcon>
        )
    }
}