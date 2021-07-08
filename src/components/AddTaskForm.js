import React from 'react';
import {FormGroup, Paper, styled} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useAddTaskForm from "../validation/useAddTaskForm";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const AddTaskForm = () => {

    const classes = useStyles()

    const AddTaskFormContainer = styled(Container) ({
        padding: "1rem",
    })

    const { values, handleChange, handleSubmit, errors } = useAddTaskForm();

    return (
        <AddTaskFormContainer component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h4" gutterBottom>
                    Add a task
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <FormControl
                        fullWidth
                    >
                        <InputLabel>Category</InputLabel>
                        <Select
                            labelId="taskType-label"
                            id="taskType"
                            name="taskType"
                            onChange={handleChange}
                            value={values.taskType}
                            error={!!errors.taskType}
                            placeholder={errors.taskType}
                        >
                            <MenuItem value={"HOME"}>Home</MenuItem>
                            <MenuItem value={"WORK"}>Work</MenuItem>
                            <MenuItem value={"HOBBY"}>Hobby</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type="number"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        id="estimatedTime"
                        label="Estimated Time (hours)"
                        name="estimatedTime"
                        onChange={handleChange}
                        value={values.estimatedTime}
                        error={!!errors.estimatedTime}
                        helperText={errors.estimatedTime}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        autoFocus
                        id="name"
                        label="Task name"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        error={!!errors.name}
                        helperText={errors.name}
                    />

                    <TextField
                        id="dueDate"
                        label="Due Date"
                        type="datetime-local"
                        name="dueDate"
                        ampm={false}
                        onChange={handleChange}
                        value={values.dueDate}
                        error={!!errors.dueDate}
                        helperText={errors.dueDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        className={classes.submit}
                    >
                        Add Task
                    </Button>
                </form>
            </div>
        </AddTaskFormContainer>
    );
};

export default AddTaskForm;
