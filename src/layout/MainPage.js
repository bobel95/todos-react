import React from 'react';
import Header from './Header';
import TaskList from "../components/TaskList";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const MainPage = () => {

    const mainContainerStyle = {
        marginBottom: "2rem"
    }

    const addTaskButtonContainer = (
        <div style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "90%",
            justifyContent: "space-between"
        }}>
            <Button variant="outlined" style={{backgroundColor: "#ccc"}}>
                <Link to="/add" style={{textDecoration: "none", color: "#111"}}>
                    <Typography variant="h5">
                        Add task
                    </Typography>
                </Link>
            </Button>
        </div>
    )

    return (
        <div style={mainContainerStyle}>
            <Header/>
            <TaskList/>
            {addTaskButtonContainer}
        </div>
    );
};

export default MainPage;
