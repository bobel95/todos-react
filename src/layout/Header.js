import React from 'react';
import {AppBar, styled, Typography} from "@material-ui/core";

const Header = () => {

    const MyAppBar = styled(AppBar) ({
        backgroundColor: "rgba(255,255,255)",
    })

    const headerContainerStyle = {
        width: "60%",
        padding: "1rem",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    }

    return (
        <MyAppBar position="sticky">
            <div style={headerContainerStyle}>
                <Typography variant="h4" color="textPrimary" style={{flex: "1"}}>To-dos</Typography>
                <Typography variant="h5" color="textPrimary">Username</Typography>
            </div>
        </MyAppBar>
    );
};

export default Header;
