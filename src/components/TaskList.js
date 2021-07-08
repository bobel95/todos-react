import React, {useState, useEffect} from 'react';
import {getTasks} from "../api/tasks";
import Task from "./Task";
import {Button, Paper, styled} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


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

    const MyButton = styled(Button) ({
        textTransform: "none",
    })

    const [tasks, setTasks] = useState([]);
    const [sorting, setSorting] = useState(null);
    const [state, setState] = useState(false);

    const reloadTasks = () => {
        setState(!state);
    }

    const handleSorting = () => {
        setSorting(sorting === "DESC" ? "ASC" : "DESC");
    }

    const getSortingIcon = () => {
        return sorting === "DESC"
            ? <ArrowUpwardIcon/>
            : <ArrowDownwardIcon/>
    }

    useEffect(() => {
        // if (sorting !== null) {
            const comparator = sorting === "ASC"
                ? (a, b) => (new Date(a.dueDate) < new Date(b.dueDate)) ? 1 : -1
                : (a, b) => (new Date(a.dueDate) > new Date(b.dueDate)) ? 1 : -1;

            const sortedTasks = [...tasks].sort(comparator);
            setTasks(sortedTasks);
        // }
    }, [sorting]);


    useEffect(() => {
        getTasks()
            .then(res => setTasks(res.data));
    }, [state]);

    return (
        <TaskListContainer>
            <div style={{borderBottom: "2px solid #aaa", width: "80%", margin: "1rem"}}>
                <MyButton onClick={() => {handleSorting()}}>
                    Sort by Due Date {getSortingIcon()}
                </MyButton>
            </div>
            {tasks.map(task => (
                <Task data={task} reloadTasks={reloadTasks} />
            ))}
        </TaskListContainer>
    );
};

export default TaskList;
