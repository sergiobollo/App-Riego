import React from 'react';
import { Link } from 'react-router-dom';


function Logo(props) {
    return <img src = { props.source }
    alt = { props.alt }
    className = "App-logo my-4" /
        >
    ;
}

function Browser(props) {
    return <
        Link to = "/Plantas" > < img src = { props.src }
    alt = { props.alt }
    className = "App-browser mb-4" /
        >
        <
        /Link>

}

function FindTrip(props) {
    return <
        div > <
        h4 className = "mt-4" > Ver plantas < /h4> <
    Browser src = { props.source }
    alt = { props.name }
    / > < /
    div >
}


function LogIn(props) {
    return <Link to = "./Login"
    className = "App-link" > Log in < /Link>
}

function CreateNewAccount(props) {
    return <Link to = "./CreateAccount"
    className = "App-link" > Create Account < /Link>
}

function BuildMytineray(props) {
    return <div >
        <
        h6 > Ingresa para agregar o quitar plantas < /h6> <
    LogIn / > <
        CreateNewAccount / > < /
    div >
}

function Home(props) {
    return <Link to = "/" > < img src = { props.source }
    alt = { props.alt }
    className = "App-home my-5" /
        >
        <
        /Link >
}

function Landing() {
    return <div >

        <
        h3 > Controla el estado de tus plantas online < /h3>

    <
    Logo source = "./logo.jpg"
    alt = "Logo" / >

        <
        FindTrip source = "./circled-right-2.png"
    name = "Browser" /
        >
        <
        BuildMytineray / >
        <
        Home source = "./homeIcon.png"
    alt = "Home" / >
        <
        /div>
}

export default Landing;