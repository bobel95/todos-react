import { useState, useEffect } from "react";
import addTaskFormValidator from "./addTaskFormValidator";
import {addTask} from "../api/tasks";
import {useHistory} from "react-router-dom";

const useAddTaskForm = () => {

    const [values, setValues] = useState({
        name: "",
        taskType: "",
        estimatedTime: "",
        dueDate: ""
    });


    const history = useHistory();
    const [errors, setErrors] = useState({ message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(addTaskFormValidator(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            addTask(values.taskType, values.name, values.dueDate, values.estimatedTime)
                .then(() => history.push("/"));
        }
    }, [ errors, isSubmitting ]);

    return { values, handleChange, handleSubmit, errors };
};



export default useAddTaskForm;