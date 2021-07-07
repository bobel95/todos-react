import React from 'react';
import {AppBar, styled, Typography} from "@material-ui/core";

const Header = () => {

    const MyAppBar = styled(AppBar) ({
        backgroundColor: "rgba(255,255,255)",
        padding: "1rem 10%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    })

    return (
        <MyAppBar position="sticky">
            <Typography variant="h4" color="textPrimary" style={{flex: "1"}}>To-do</Typography>
            <Typography variant="h5" color="textPrimary">Username</Typography>
        </MyAppBar>

    );
};

export default Header;
