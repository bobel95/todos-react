import { useState, useEffect } from "react";
import completeTaskFormValidator from "./completeTaskFormValidator";

const useCompleteTaskForm = taskId => {

    const [values, setValues] = useState({
        timeSpent: ""
    });

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
        setErrors(completeTaskFormValidator(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            console.log(`Is submitting for taskId: ${taskId}, hours: ${values.timeSpent}`);
        }
    }, [errors, isSubmitting]);

    return { values, handleChange, handleSubmit, errors };
};



export default useCompleteTaskForm;