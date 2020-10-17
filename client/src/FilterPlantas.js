import React from 'react';
import FilterForm from './filterForm';
import { connect } from "react-redux";
import { LISTAR_CIUDADES, FILTER_CITIES } from "./store/actions/cityActions";
import { Link } from 'react-router-dom';
import { FILTER_ITINERARIES } from "./store/actions/itineraryActions";
import ListGroup from 'react-bootstrap/ListGroup';

class FilterPlantas extends React.Component {



    fetchCities = () => {
        // this.setState({...this.state, isFetching: true })
        fetch("https://riego-server.herokuapp.com/plantas/all")
            .then(response => response.json())
            .then(result => this.props.listarCiudades(result))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchCities()
        console.log(this)
    }

    filterCities = (cityFilter) => {
        this.props.filtrarCiudades(cityFilter);
    }

    handleClick = (name) => {
        this.props.clickearCiudad(name)
    }

    render() {
        console.log(this.props.logged)
        return ( <
            React.Fragment >
            <
            FilterForm cityFilter = { this.props.filteredCities }
            match = { this.props.match }
            onChange = { this.filterCities }
            />  <
            ListGroup > {
                this.props.filteredCities.map((city) =>
                    <
                    ListGroup.Item key = { city._id }
                    value = { city.planta } > <
                    Link to = "/IoTDatas"
                    onClick = {
                        () => this.handleClick(city.planta)
                    } > { city.planta } < /Link> </ListGroup.Item >
                )
            } < /ListGroup> < /
            React.Fragment >
        )
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        listarCiudades: (result) => dispatch({ type: LISTAR_CIUDADES, payload: result }),
        filtrarCiudades: (cityFilter) => dispatch({ type: FILTER_CITIES, payload: cityFilter }),
        clickearCiudad: (name) => dispatch({ type: FILTER_ITINERARIES, payload: name })
    }
}

const mapStateToProps = (state) => {
    return {
        citiesList: state.cities.cities,
        filteredCities: state.cities.filteredCities,
        isFetching: state.isFetching,
        url: state.itineraries.url,
        logged: state.user.logged
    }

}

export default connect(mapStateToProps, mapDispactchToProps)(FilterPlantas)