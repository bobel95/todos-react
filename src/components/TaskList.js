import React, {useState, useEffect} from 'react';
import {getTasks} from "../api/tasks";
import Task from "./Task";
import {Button, Paper, styled} from "@material-ui/core";

const TaskList = () => {

    const TaskListContainer = styled(Paper) ({
        width: "80%",
        margin: "1rem auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    });

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks()
            .then(res => setTasks(res.data));
    }, []);

    console.log(tasks);

    return (
        <TaskListContainer>
            <div style={{borderBottom: "2px solid #aaa", width: "80%", margin: "1rem"}}>
                <Button>sort</Button>
            </div>
            {tasks.map(task => (
                <Task data={task}/>
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
