//Reducer (function fired based on action type)
//Takes current state value and next state(action) object

const initialState= {};

const errorReducer= (state= initialState, action) => {
    switch(action.type) {
        case "GET_ERRORS":
            return action.payload;  //dispatch error object (from server) to store

        default:
            return state;
    }
};

export default errorReducer;