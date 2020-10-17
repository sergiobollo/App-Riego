import React from 'react';
import { connect } from "react-redux";
import { FILTER_ITINERARIES, LISTAR_ITINERARIOS } from "./store/actions/itineraryActions";
import HomeLink from './homeLink';
import Contador from "./contador";
import CreateNewDatos from "./botonNewDatos";


class IoTDatas extends React.Component {

    fetchItineraries = () => {
        // this.setState({...this.state, isFetching: true })
        fetch(this.props.url)
            .then(response => response.json())
            .then(result => this.props.listarItinerarios(result))
            .catch(e => console.log(e))
    }

    componentDidMount() {
        this.fetchItineraries()
        console.log(this.props.url)

    }

    render() {
        let datos = {};
        if (this.props.itineraries[0] !== undefined)
            datos = this.props.itineraries[0];
        return ( <
            React.Fragment >
            <
            h1 > { this.props.planta } < /h1>

            <
            Contador / >

            <
            CreateNewDatos / >

            <
            ul > <
            li > Temperatura: { datos.temperatura }°
            C < /li> <
            li > Humedad: { datos.humedad } % < /li> <
            li > Luz: { datos.luz } < /
            li > <
            /ul> <
            HomeLink / >
            <
            /
            React.Fragment >
        )
    }

}

const mapDispactchToProps = (dispatch) => {
    return {
        listarItinerarios: (result) => dispatch({ type: LISTAR_ITINERARIOS, payload: result }),
        filtrarItinerarios: (cityName) => dispatch({ type: FILTER_ITINERARIES, payload: cityName })
    }
}

const mapStateToProps = (state) => {
    return {
        itineraries: state.itineraries.itineraries,
        url: state.itineraries.url,
        isFetching: state.isFetching,
        planta: state.itineraries.planta
    }

}




export default connect(mapStateToProps, mapDispactchToProps)(IoTDatas)