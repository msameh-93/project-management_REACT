import axios from "axios";
//An arrow function that 'implicitly' returns an arrow function (dispatch)
//mapped to props.dispatch on connect method
const createProject= (projectObject, history)=> async dispatch => {
    try {
        const response= await axios.post("http://localhost:8080/api/project", projectObject);
        history.push("./dashboard");    //will manipulate this.props.history passed from parent component
    } catch(error) {
        dispatch({
            type:"GET_ERRORS",
            payload: error.response.data    //Object passed to reducer (returned to store)
        })
    }
}
const getProjects= () => async dispatch => {
    try {
        const response= await axios.get("http://localhost:8080/api/project");
        dispatch({      //dispatch call to redux store
            type: "GET_PROJECTS",
            payload: response.data
        })
    } catch(error) {
        dispatch({
            type:"GET_ERRORS",
            payload: error.response.data
        })
    }
}
export { createProject, getProjects };