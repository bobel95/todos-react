import React from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {styled} from "@material-ui/core";
import useCompleteTaskForm from "../validation/useCompleteTaskForm";


const CompleteTaskForm = props => {

    const CompleteTaskFormContainer = styled(Container) ({
        padding: "1rem",
    })

    const textFieldProps = {
        inputProps: {
            min: 0
        }
    };

    const { taskId, reloadTasks } = props;
    const { values, handleChange, handleSubmit, errors } = useCompleteTaskForm(taskId, reloadTasks);

    return (
        <CompleteTaskFormContainer>
            <div>
                <Typography component="h1" variant="h6" gutterBottom>
                    How much time did it take you to complete this task?
                </Typography>
                <form noValidate onSubmit={handleSubmit}>
                    <TextField
                        type="number"
                        InputProps={textFieldProps}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="timeSpent"
                        label="Time spent (hours)"
                        name="timeSpent"
                        autoFocus
                        onChange={handleChange}
                        value={values.timeSpent}
                        error={!!errors.timeSpent}
                        helperText={errors.timeSpent}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Finish Task
                    </Button>
                </form>
            </div>
        </CompleteTaskFormContainer>
    );
};

export default CompleteTaskForm;
