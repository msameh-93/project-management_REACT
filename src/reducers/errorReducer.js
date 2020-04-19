//Reducer (function fired based on action type)
//Takes current state value and next state(action) object

const initialState= {};

const errorReducer= (state= initialState, action) => {
    switch(action.type) {
        case "GET_ERRORS":
            console.log("ERROR OCCURED!");
            return action.payload;  //returns to error reducer object at redux store

        default:
            return state;
    }
};

export default errorReducer;