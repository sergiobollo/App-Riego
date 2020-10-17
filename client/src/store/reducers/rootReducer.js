import { combineReducers } from "redux";
import FilterCitiesReducer from "./citiesReducer";
import FilterFormReducer from "./FilterFormReducer";
import ItinerariesReducer from "./itineraryReducer";
import usersReducer from "./usersReducer";
import registerReducer from "./registerReducer";
import datosReducer from "./datosReducer";
import plantaReducer from "./plantaReducer";

const rootReducer = combineReducers({ cities: FilterCitiesReducer, cityFilter: FilterFormReducer, itineraries: ItinerariesReducer, user: usersReducer, token: registerReducer, datos: datosReducer, planta: plantaReducer });

export default rootReducer;