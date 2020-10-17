const initialState = {
    planta: '',
    temperatura: 0,
    humedad: 0,
    luz: "",
};

const datosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_PLANTA':
            return {
                ...state,
                planta: action.payload
            }
        case 'POST_TEMPERATURA':
            return {
                ...state,
                temperatura: action.payload
            }

        case 'POST_HUMEDAD':
            return {
                ...state,
                humedad: action.payload
            }

        case 'POST_LUZ':
            return {
                ...state,
                luz: action.payload
            }

        default:
            return state;
    }
};

export default datosReducer