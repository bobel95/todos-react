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
        justifyContent: "space-around"
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

    const DeleteButton = styled(MyButton) ({
        color: "#d73d3d",
        borderColor: "#d73d3d"
    })

    const FinishTaskButton = styled(MyButton) ({
        color: "green",
        borderColor: "green"
    })

    const finishTaskButton = (
        <FinishTaskButton variant="outlined" style={{color: "green"}}>
            Finish Task
            <CheckBoxIcon fontSize="medium" color="action"/>
        </FinishTaskButton>
    );

    const taskActions = (
        <TaskActions>
            <SimpleModal
                component={finishTaskButton}
                content={<CompleteTaskForm taskId={id} reloadTasks={reloadTasks} />}
            />
            <DeleteButton variant="outlined" onClick={handleDelete}>
                Delete
                <DeleteIcon fontSize="medium" color="action"/>
            </DeleteButton>
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
        : <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <DueDateText variant="subtitle1" color="textSecondary">
                {`Due at: ${getDateAndTimeString(new Date(dueDate))}`}
            </DueDateText>
            <DueDateText variant="subtitle1" color="textSecondary">
                {`Time left: ${daysLeft} days, ${hoursLeft}h, ${minutesLeft}min`}
            </DueDateText>
        </div>


    return (
        <TaskContainer variant="outlined">
            <TaskName variant="h5" gutterBottom>{name}</TaskName>
            <TaskDetails>
                <div style={{minWidth: "100px"}}>
                    {getIconByTaskType(taskType)}
                </div>
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
