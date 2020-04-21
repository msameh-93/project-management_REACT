const initialState= {
    tasks: [],
    task: {}
}

const taskReducer= (state= initialState, action) => {
    switch(action.type) {
        case "GET_TASKS":
            return{
                ...state,
                tasks: action.payload
            }
        case "GET_TASK":
            return {
                ...state,
                task: action.payload
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(el => el.projectSequence !== action.payload)
            }
        default:
            return state;
    }
}

export default taskReducer;