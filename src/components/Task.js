import React from 'react';
import {Button, Container, Paper, styled, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from "@material-ui/icons/Work";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import {getDateAndTimeString, getTimeLeft} from "../util/DateUtil";
import {deleteTask} from "../api/tasks";
import SimpleModal from "./SimpleModal";
import CompleteTaskForm from "./CompleteTaskForm";
import {useLocation} from "react-router-dom";

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

    const reloadTasks = props.reloadTasks;

    const { daysLeft, hoursLeft, minutesLeft } = getTimeLeft(new Date(dueDate));

    const handleDelete = () => {
        deleteTask(id)
            .then(() => {
                reloadTasks();
            });
    }

    const TaskContainer = styled(Paper) ({
        padding: "1rem",
        width: "80%",
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee"

    });

    const TaskDetails = styled(Container) ({
        borderTop: "1px solid #aaa",
        width: "100%",
        padding: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    });

    const TaskActions = styled(Container) ({
        display: "flex",
        justifyContent: "center"
    })

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

    const completeTaskButton = (
        <MyButton variant="outlined">
            Complete Task
            <CheckBoxIcon fontSize="medium" color="action"/>
        </MyButton>
    );

    const taskActions = (
        <TaskActions>
            <SimpleModal
                component={completeTaskButton}
                content={<CompleteTaskForm taskId={id} reloadTasks={reloadTasks} />}
            />
            <MyButton variant="outlined" onClick={handleDelete}>
                Delete
                <DeleteIcon fontSize="medium" color="action"/>
            </MyButton>
        </TaskActions>
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
        ? <Typography variant="subtitle1" color="textSecondary">
            {`Due at: ${getDateAndTimeString(new Date(dueDate))}`}
        </Typography>
        : <div>
            <DueDateText variant="subtitle1" color="textSecondary">
                {`Due at: ${getDateAndTimeString(new Date(dueDate))}`}
                <br/>
                {`Time left: ${daysLeft} days, ${hoursLeft}h, ${minutesLeft}min`}
            </DueDateText>
        </div>


    return (
        <TaskContainer variant="outlined">
            <TaskName variant="h5" gutterBottom>{name}</TaskName>
            <TaskDetails>
                {getIconByTaskType(taskType)}
                {dueDateText}
                <Typography variant="subtitle1" color="textSecondary">
                    Estimated: {estimatedTime}h
                </Typography>
            </TaskDetails>
            {finished ? finishedDetails : taskActions}
        </TaskContainer>
    );
};

export default Task;
