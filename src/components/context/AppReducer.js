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
        case 'UPDATE_CODE':
            const updtCode = state.codes.find(
                (cod) => cod.id == action.payload.id
              );
              console.log('coming from update code', updtCode)
              updtCode.desc = action.payload.desc;
              updtCode.type = action.payload.type;
              updtCode.codearea = action.payload.codearea;
            return {
                // ...state,
                codes : [...state.codes]
            }
        default:
            return state
    }
}