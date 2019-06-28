import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class CustomAppBar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar posotion="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            {this.props.pageTitle}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default CustomAppBar