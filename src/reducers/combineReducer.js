import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

//Imported function exported as is
const combinedRducers= combineReducers({
    //errorsxxx: a state object in redux store (stores values returned by error reducer)
    errorsxxx: errorReducer
});

export default combinedRducers;