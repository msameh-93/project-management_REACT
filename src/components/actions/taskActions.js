import axios from "axios";

const createTask= (newTask, projectIdentifier, history) => async dispatch =>{
    try {
        await axios.post(`http://localhost:8080/api/backlog/${projectIdentifier}`, newTask);
        history.push(`/projectboard/${projectIdentifier}`);
        dispatch({
            type: "GET_ERRORS",
            payload: {}
        })
    } catch(error) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}
const updateTask= (updatedTask, projectIdentifier, projectSequence) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/backlog/${projectIdentifier}/${projectSequence}`,
            updatedTask);
    } catch(error) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}
const getAllTasks= (projectIdentifier) => async dispatch => {
    try {
        const response= await axios.get(`http://localhost:8080/api/backlog/${projectIdentifier}`);
        dispatch({
            type: "GET_TASKS",
            payload: response.data
        })
    } catch( error ) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}
const getTask= (projectIdentifier, projectSequence) => {

}
const deleteTask= (projectIdentifier, projectSequence) => {

}

 
export { getAllTasks, getTask, deleteTask, createTask, updateTask };