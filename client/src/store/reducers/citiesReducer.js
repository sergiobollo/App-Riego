const initialState = {
    cities: [],
    filteredCities: []
}

const FilterCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LISTAR_CIUDADES':
            return {...state, cities: action.payload, filteredCities: action.payload };
        case 'FILTER_CITIES':
            return {...state,
                filteredCities: state.cities.filter((city) => {
                    let cityName = city.planta.toLowerCase()
                    return cityName.indexOf(
                        action.payload.toLowerCase()) === 0
                })

            };
        default:
            return state
    }
}

export default FilterCitiesReducer