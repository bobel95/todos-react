import React from 'react';
import Header from "./Header";
import AddTaskForm from "../components/AddTaskForm";
import {Container, styled} from "@material-ui/core";

const AddTaskPage = () => {

    const FormContainer = styled(Container) ({
        width: "50%",
        margin: "2rem auto",
        padding: "3rem",
        border: "1px solid #aaa",
        borderRadius: "15px",
    })

    return (
        <div>
            <Header/>
            <FormContainer>
                <AddTaskForm/>
            </FormContainer>
        </div>
    );
};

export default AddTaskPage;
