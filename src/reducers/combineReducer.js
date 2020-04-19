import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

//Imported function exported as is
const combinedRducers= combineReducers({
    //errorsxxx: a state object in redux store (stores values returned by error reducer)
    errorsxxx: errorReducer,
    projectsxxx: projectReducer
});

export default combinedRducers;