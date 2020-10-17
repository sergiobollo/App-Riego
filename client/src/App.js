import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Plantas from './Plantas';
import Login from './Login';
import CreateAccount from './CreateAccount';
import IoTDatas from './IoTDatas';
import CargarDatos from "./CargarDatos";
import NuevaPlanta from "./NuevaPlanta";
import Notfound from './notfound';

export default class App extends Component {
    render() {
        return ( < BrowserRouter basename = '/' >
            <
            div className = "App" >
            <
            Switch >
            <
            Route exact path = '/'
            component = { Landing }
            /> <
            Route path = '/Plantas'
            component = { Plantas }
            />  <
            Route path = '/Login'
            component = { Login }
            />  <
            Route path = '/CreateAccount'
            component = { CreateAccount }
            />  <
            Route path = '/IoTDatas'
            component = { IoTDatas }
            />  <
            Route path = '/CargarDatos'
            component = { CargarDatos }
            /> 

            <
            Route path = '/NuevaPlanta'
            component = { NuevaPlanta }
            /> <
            Route component = { Notfound }
            /> < /
            Switch > <
            /
            div >
            <
            /
            BrowserRouter >
        );
    }
}