const initialState = {
    cityFilter: ""
}

const FilterFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return {...state, cityFilter: action.payload }
        default:
            return state
    }
}

export default FilterFormReducer