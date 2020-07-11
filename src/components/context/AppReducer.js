export default (state, action) => {
    switch(action.type){

        case 'DELETE_CODE':
            return {
                ...state,
                codes: state.codes.filter(code => code.id !== action.payload)
            }
        case 'ADD_CODE':
            return {
                ...state,
                codes : [action.payload, ...state.codes]
            }
        default:
            return state
    }
}