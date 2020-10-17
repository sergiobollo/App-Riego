import React from 'react';
import { connect } from "react-redux";
import { POST_PLANTA, POST_DUEÑO, POST_TEMPERATURA, POST_HUMEDAD, POST_LUZ } from "./store/actions/cityActions";
import axios from 'axios';
import HomeLink from './homeLink';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class NuevaPlanta extends React.Component {

    async handleSubmit(event) {
        let res = await axios.post("https://riego-server.herokuapp.com/plantas/", this.props.params);
        console.log(res.data);
        alert('A plant was submitted: ' + this.props.planta);
        event.preventDefault();
    }

    handlePlantaChange(event) {
        this.props.crearPlanta(event.target.value);
    }

    handleDueñoChange(event) {
        this.props.crearDueño(event.target.value);
    }

    handleTemperaturaChange(event) {
        this.props.crearTemperatura(event.target.value);
    }

    handleHumedadChange(event) {
        this.props.crearHumedad(event.target.value);
    }

    handleLuzChange(event) {
        this.props.crearLuz(event.target.value);
    }

    render() {
        return ( <
            React.Fragment >
            <
            h1 className = "my-5" > Cargar nueva planta { this.props.planta } < /h1> <
            form onSubmit = { this.handleSubmit.bind(this) } >
            <
            Container >
            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            label >
            Planta:
            <
            input placeholder = "Planta"
            type = "string"
            value = { this.props.planta }
            onChange = { this.handlePlantaChange.bind(this) }
            /> < /
            label > < /Col></Row >
            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            label >
            Dueño:
            <
            input placeholder = "Dueño"
            type = "string"
            value = { this.props.dueño }
            onChange = { this.handleDueñoChange.bind(this) }
            /> < /
            label > < /Col></Row >

            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            label >
            Temperatura:
            <
            input placeholder = "Temperatura"
            type = "number"
            value = { this.props.Temperatura }
            onChange = { this.handleTemperaturaChange.bind(this) }
            /> < /
            label > < /Col></Row >
            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            label >
            Humedad:
            <
            input placeholder = "Humedad"
            type = "number"
            value = { this.props.Humedad }
            onChange = { this.handleHumedadChange.bind(this) }
            /> < /
            label > < /Col></Row >

            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            label >
            Luz:
            <
            input placeholder = "Luz"
            type = "string"
            value = { this.props.Luz }
            onChange = { this.handleLuzChange.bind(this) }
            /> < /
            label > < /Col></Row >

            <
            Row >
            <
            Col md = {
                { span: 3, offset: 3 }
            } >
            <
            input type = "submit"
            value = "Submit" / > < /Col> </Row >
            <
            /Container> < /
            form > <
            HomeLink / >
            <
            /
            React.Fragment >
        );
    }
}


const mapDispactchToProps = (dispatch) => {
    return {
        crearPlanta: (value) => dispatch({ type: POST_PLANTA, payload: value }),
        crearDueño: (value) => dispatch({ type: POST_DUEÑO, payload: value }),
        crearTemperatura: (value) => dispatch({ type: POST_TEMPERATURA, payload: value }),
        crearHumedad: (value) => dispatch({ type: POST_HUMEDAD, payload: value }),
        crearLuz: (value) => dispatch({ type: POST_LUZ, payload: value }),
    }
}


const mapStateToProps = (state) => {
    return {
        params: state.planta,
        planta: state.planta.planta,
        dueño: state.planta.dueño,
        temperatura: state.planta.temperatura,
        humedad: state.planta.humedad,
        luz: state.planta.luz,
    };
}

export default connect(mapStateToProps, mapDispactchToProps)(NuevaPlanta)