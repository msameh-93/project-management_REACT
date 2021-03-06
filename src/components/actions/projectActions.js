import axios from "axios";
//An arrow function that 'implicitly' returns an arrow function (dispatch)
//mapped to props.dispatch on connect method
const createProject= (projectObject, history)=> async dispatch => {
    try {
        await axios.post("/api/project", projectObject);
        history.push("/dashboard");    //will manipulate this.props.history passed from parent component
        dispatch({
            type: "GET_ERRORS",         //clear errors on errorReduxStore
            payload: {}     
        })
    } catch(error) {
        dispatch({
            type:"GET_ERRORS",
            payload: error.response.data    //Object passed to reducer (returned to store)
        })
    }
}
const getProjects= () => async dispatch => {
    try {
        const response= await axios.get("/api/project");
        dispatch({      //dispatch call to redux store
            type: "GET_PROJECTS",
            payload: response.data
        });
        dispatch({      
            type: "GET_ERRORS",         //clear errors on errorReduxStore
            payload: {}   
        });
    } catch(error) {
        dispatch({
            type:"GET_ERRORS",
            payload: error.response.data
        })
    }
}
const getProject= (identifier, history) => async dispatch => {
    try {
        const response= await axios.get(`/api/project/${identifier}`);
        dispatch({
            type:"GET_PROJECT",
            payload: response.data
        });
        dispatch({      
            type: "GET_ERRORS",         //clear errors on errorReduxStore
            payload: {}   
        });
    } catch (error) {
        history.push("/dashboard");
    }

}
const deleteProject= (identifier) => async dispatch => {
    if(window.confirm("Are you Sure you want to delete this project?")) {
        try {
            await axios.delete(`/api/project/${identifier}`);
            dispatch({
                type: "DELETE_PROJECT",
                payload: identifier
            })
        } catch(error) {
            console.log(error);
        }
    }

}
export { createProject, getProjects, getProject, deleteProject };