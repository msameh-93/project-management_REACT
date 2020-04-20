import axios from "axios";

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
const updateTask= (projectIdentifier, projectSequence) => {

}
const createTask= (projectIdentifier, projectSequence) => {

}
 
export { getAllTasks, getTask, deleteTask, createTask, updateTask };