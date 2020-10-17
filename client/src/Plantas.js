import React from 'react';
import FilterPlantas from './FilterPlantas';
//import VisibleCities from './VisibleCities';
import HomeLink from './homeLink';
import CreateNewPlanta from "./botonNewPlanta";



class Plantas extends React.Component {

    render() {
        return ( <
            React.Fragment >



            <
            h4 className = "pt-4" > Selecciona una de tus plantas < /h4>

            <
            CreateNewPlanta / >

            <
            FilterPlantas / >
            <
            HomeLink / >
            <
            /React.Fragment>
        )
    }
}

export default Plantas