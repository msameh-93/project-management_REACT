const initialState= {   //project state IN STORE!!
    projects: [],        //all projects
    project: {}
}

const projectReducer= (state= initialState, action) => {
    //action is sent through redux mapped dispatch
    switch(action.type) {
        case "GET_PROJECTS":
            console.log("@PROJECT REDUCER: GETTING PROJECT!");
            return {        //changes current redux store state
                ...state,
                projects: action.payload    //passed from getProject Action generator
            }
        default:
            return state;
    }
};

export default projectReducer;