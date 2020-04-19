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
            payload: error.response.data
        })
    }
}

export { createProject };