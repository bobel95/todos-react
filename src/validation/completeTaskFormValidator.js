const completeTaskFormValidator = values => {
    let errors = {};

    if (!values.timeSpent) {
        errors.timeSpent = "This field is required";
    }

    if (values.timeSpent && values.timeSpent < 1) {
        errors.timeSpent = "Time spent on a task can't be less than 1";
    }

    return errors;
}

export default completeTaskFormValidator;