import React from 'react'
import {AppBar} from "material-ui";

class Navigation extends React.Component {
    render() {
        return (
            <div className="navbar">
                <AppBar
                    title="Readability"
                    showMenuIconButton={false}
                />
            </div>
        )
    }
}

export default Navigation
