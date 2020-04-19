//Reducer (function fired based on action type)
//Takes current state value and next state(action) object

const initialState= {};

const errorReducer= (state= initialState, action) => {
    switch(action.type) {
        case "GET_ERRORS":
            console.log("@ERROR REDUCER: ERROR OCCURED!");
            //RETURNS AN OBJECT key/value pairs for store
            //=== { key: value } in store state
            return action.payload;  //passed from catch block in action generator - payload: error.response.data
        default:
            return state;
    }
};

export default errorReducer;