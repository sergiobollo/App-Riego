const initialState = {
    token: '',
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_EMAIL':
            return {
                ...state,
                token: action.payload
            }  
        default:
            return state;
    }
};
export default registerReducer
