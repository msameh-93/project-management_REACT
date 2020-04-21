const initialState= {   //project state IN STORE!!
    projects: [],        //all projects
    project: {}
}

const projectReducer= (state= initialState, action) => {
    //action is sent through redux mapped dispatch
    switch(action.type) {
        case "GET_PROJECTS":
            return {        //changes current redux store state
                ...state,
                projects: action.payload    //passed from getProject Action generator
            }
        case "GET_PROJECT":
            return {
                ...state,
                project: action.payload
            }
        case "DELETE_PROJECT":
            return {
                ...state,
                projects: state.projects.filter(el => el.identifier !== action.payload)
            }
        default:
            return state;
    }
};

export default projectReducer;