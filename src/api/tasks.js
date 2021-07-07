import axios from "axios";

const BASE_URL = "http://localhost:8080/api/tasks";

const getTasks = () => {
    return axios.get(BASE_URL);
}

const addTask = (taskType, name, dueDate, estimatedTime) => {
    const data = {
        taskType: taskType,
        name: name,
        dueDate: dueDate,
        estimatedTime: estimatedTime
    }

    return axios.post(BASE_URL, data);
}

const deleteTask = taskId => {
    return axios.delete(`${BASE_URL}/${taskId}`);
}

const finishTask = (taskId, timeSpent) => {
    return axios.put(`${BASE_URL}/complete/${taskId}`, null, { params: {
            time_spent: timeSpent
        }});
}

export {getTasks, addTask, deleteTask, finishTask};