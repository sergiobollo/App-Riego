const initialState = {
    itineraries: [],
    url: [],
    planta: ""
}

const ItinerariesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTAR_ITINERARIOS':
            return {...state, itineraries: action.payload };
        case 'FILTER_ITINERARIES':
            return {...state, url: "https://riego-server.herokuapp.com/plantas/" + action.payload, planta: action.payload };
        default:
            return state
    }
}

export default ItinerariesReducer