import React from 'react';
import {Button, Container, Paper, styled, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from "@material-ui/icons/Work";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import {getDateAndTimeString, getTimeLeft} from "../util/DateUtil";

const getIconByTaskType = taskType => {
    const SIZE = "large";
    const COLOR = "action";

    switch (taskType) {
        case "HOME":
            return <HomeIcon fontSize={SIZE} color={COLOR}/>;
        case "WORK":
            return <WorkIcon fontSize={SIZE} color={COLOR}/>;
        case "HOBBY":
            return <SportsEsportsIcon fontSize={SIZE} color={COLOR}/>;
        default:
            return <BrokenImageIcon fontSize={SIZE} color={COLOR}/>;
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

    const TaskDetails = styled(Container) ({
        borderTop: "1px solid #aaa",
        width: "100%",
        padding: "5px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    });

    const TaskName = styled(Typography) ({
        textDecoration: finished ? "line-through" : "none"
    });

    const DueDateText = styled(Typography) ({
        color: daysLeft < 1 ? "red" : ""
    });

    const MyButton = styled(Button) ({
        margin: "5px",
        textTransform: "none"
    })

    const taskActions = (
        <div>
            <MyButton variant="outlined">
                Complete Task
                <CheckBoxIcon fontSize="medium" color="action"/>
            </MyButton>
            <MyButton variant="outlined">
                Delete
                <DeleteIcon fontSize="medium" color="action"/>
            </MyButton>
        </div>
    );

    const finishedDetails = (
        <TaskDetails>
            <CheckBoxIcon fontSize="large" style={{fill: "#66bf51"}}/>
            <Typography variant="subtitle1" color="textSecondary">
                Completed at: {getDateAndTimeString(new Date(finishedDate))}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Actual: {actualTime}h
            </Typography>
        </TaskDetails>
    )

    const dueDateText = finished
        ? `Due at: ${getDateAndTimeString(new Date(dueDate))}`
        : `Due in: ${daysLeft} days, ${hoursLeft}h`;

    return (
        <TaskContainer variant="outlined">
            <TaskName variant="h5" gutterBottom>{name}</TaskName>
            <TaskDetails>
                {getIconByTaskType(taskType)}
                <DueDateText variant="subtitle1" color="textSecondary">
                    {dueDateText}
                </DueDateText>
                <Typography variant="subtitle1" color="textSecondary">
                    Estimated: {estimatedTime}h
                </Typography>
            </TaskDetails>
            {finished ? finishedDetails : taskActions}
        </TaskContainer>
    );
}

export default Task;
