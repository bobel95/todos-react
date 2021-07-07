import React from 'react';
import {styled} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import useAddTaskForm from "../validation/useAddTaskForm";
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';

const AddTaskForm = () => {
    const AddTaskFormContainer = styled(Container) ({
        padding: "1rem",
    })

    const { values, handleChange, handleSubmit, errors } = useAddTaskForm();

    return (
        <AddTaskFormContainer component="main" maxWidth="xs">
            <div>
                <Typography component="h1" variant="h5" gutterBottom>
                    Add a task
                </Typography>
                <form onSubmit={handleSubmit}>

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
                            required
                        >
                            <MenuItem value={"HOME"}>Home</MenuItem>
                            <MenuItem value={"WORK"}>Work</MenuItem>
                            <MenuItem value={"HOBBY"}>Hobby</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        type="number"
                        InputProps={{
                            inputProps: {
                                min: 0,
                            }
                        }}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="estimatedTime"
                        label="Estimated Time (hours)"
                        name="estimatedTime"
                        autoFocus
                        onChange={handleChange}
                        value={values.estimatedTime}
                        error={!!errors.estimatedTime}
                        helperText={errors.estimatedTime}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Task name"
                        name="name"
                        autoFocus
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
                        onChange={handleChange}
                        value={values.dueDate}
                        error={!!errors.dueDate}
                        helperText={errors.dueDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Add Task
                    </Button>
                </form>
            </div>
        </AddTaskFormContainer>
    );
};

export default AddTaskForm;
