import React, {useState, useEffect} from 'react';
import {getTasks} from "../api/tasks";
import Task from "./Task";
import {Button, Paper, styled} from "@material-ui/core";

const TaskList = () => {

    const TaskListContainer = styled(Paper) ({
        width: "50%",
        minWidth: "400px",
        margin: "1rem auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    });

    const [tasks, setTasks] = useState([]);
    const [state, setState] = useState(false);

    const reloadTasks = () => {
        setState(!state);
    }

    useEffect(() => {
        getTasks()
            .then(res => setTasks(res.data));
    }, [state]);

    return (
        <TaskListContainer>
            <div style={{borderBottom: "2px solid #aaa", width: "80%", margin: "1rem"}}>
                <Button>sort</Button>
            </div>
            {tasks.map(task => (
                <Task data={task} reloadTasks={reloadTasks} />
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
