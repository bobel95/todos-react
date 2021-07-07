import React from 'react';
import {Button, Paper, styled, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from "@material-ui/icons/Work";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import {getTimeLeft} from "../util/DateUtil";

const getIconByTaskType = taskType => {
    const SIZE = "large";

    switch (taskType) {
        case "HOME":
            return <HomeIcon fontSize={SIZE}/>;
        case "WORK":
            return <WorkIcon fontSize={SIZE}/>;
        case "HOBBY":
            return <SportsEsportsIcon fontSize={SIZE}/>;
        default:
            return <BrokenImageIcon fontSize={SIZE}/>;
    }
}

const Task = props => {

    const {
        id,
        dueDate,
        estimatedTime,
        actualTime,
        finished,
        finishedDate,
        name,
        taskType
    } = props.data;

    const { daysLeft, hoursLeft } = getTimeLeft(new Date(dueDate));

    const TaskContainer = styled(Paper) ({
        padding: "1rem",
        width: "80%",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    });

    return (
        <TaskContainer variant="outlined">
            <Typography variant="h5" gutterBottom style={
                {textDecoration: finished ? "line-through" : "none"}
            }>
                {name}
            </Typography>
            <div style={{
                borderTop: "1px solid #aaa",
                borderBottom: "1px solid #aaa",
                width: "100%",
                padding: "5px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
            }}>
                {getIconByTaskType(taskType)}
                <div>
                    <Typography variant="subtitle1">Due in: {daysLeft} days and {hoursLeft}h</Typography>
                </div>
                <Typography variant="subtitle1">Estimated: {estimatedTime}h</Typography>
            </div>

            <div>
                <Button>Mark as finished</Button>
            </div>
        </TaskContainer>
    );
};

export default Task;
