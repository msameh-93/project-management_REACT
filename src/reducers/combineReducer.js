import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";

//Imported function exported as is
const combinedRducers= combineReducers({
    //errorsxxx: a state object in redux store (stores values returned by error reducer)
    errorsReduxStore: errorReducer,
    projectReduxStore: projectReducer,
    taskReduxStore: taskReducer
});

export default combinedRducers;