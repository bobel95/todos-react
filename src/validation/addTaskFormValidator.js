const completeTaskFormValidator = values => {
    let errors = {};

    console.log(values);
    if (!values.estimatedTime) {
        errors.estimatedTime = "This field is required";
    }

    if (values.estimatedTime && values.estimatedTime < 0) {
        errors.estimatedTime = "Estimated time for a task can't be less than 0";
    }

    if (!values.dueDate) {
        errors.dueDate = "This field is required";
    }

    if (new Date(values.dueDate) < Date.now()) {
        errors.dueDate = "Due date can't be in the past";
    }

    if (!values.name) {
        errors.name = "This field is required";
    }

    if (!values.taskType) {
        errors.taskType = "This field is required";
    }

    return errors;
}

export default completeTaskFormValidator;