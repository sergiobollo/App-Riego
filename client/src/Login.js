import React from 'react';
import { connect } from "react-redux";
import { POST_EMAIL, POST_PASSWORD, LOGIN } from "./store/actions/usersAction";
import axios from 'axios';
//import { REGISTER_EMAIL } from "./store/actions/registerAction";
import { Redirect } from 'react-router-dom';
import HomeLink from './homeLink';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Login extends React.Component {

    async handleSubmit(event) {
        let res = await axios.post('http://localhost:5000/authentication/login', this.props.params);
        console.log(res.data);
        this.props.login(res.data);
        alert("Login", this.props.logged);
        // this.storeToken(this.props.logged.token)
        event.preventDefault();
    }

    componentWillUnmount() {
        this.props.ingresarEmail("")
        this.props.ingresarPassword("")
    }

    /*  async storeToken(token) {
        console.log(token);
        axios.defaults.headers.common.Authorization = 'bearer ' + token;
        localStorage.setItem('token', token);
        const decoded = jwt_decode(token);
        console.log(decoded);
      } */

    handleEmailChange(event) {
        this.props.ingresarEmail(event.target.value);
    }

    handlePasswordChange(event) {
        this.props.ingresarPassword(event.target.value);
    }

    render() {
        let content;
        console.log(this.props.logged);
        if (this.props.logged.token) {
            content = < Redirect to = '/' > < /Redirect>
        } else {
            content = <
                React.Fragment >

                <
                h1 className = "m-5" > Login < /h1> <
            form >
                <
                label >
                Email:
                <
                input placeholder = "Email"
            type = "email"
            value = { this.props.email }
            onChange = { this.handleEmailChange.bind(this) }
            /> < /
            label > <
                label >
                Password:
                <
                input placeholder = "Password"
            type = "password"
            value = { this.props.password }
            onChange = { this.handlePasswordChange.bind(this) }
            /> < /
            label >


                <
                /form> <
            Container >
                <
                Row >
                <
                Col md = {
                    { span: 3, offset: 3 }
                } > <
                button className = "m-5"
            onClick = { this.handleSubmit.bind(this) } > OK < /button> </Col > <
                /Row> <
            Row >
                <
                Col md = {
                    { span: 3, offset: 3 }
                } >
                <
                HomeLink / > < /Col> < /
            Row > < /
            Container > <
                /React.Fragment>

        }
        return content;
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        ingresarEmail: (value) => dispatch({ type: POST_EMAIL, payload: value }),
        ingresarPassword: (value) => dispatch({ type: POST_PASSWORD, payload: value }),
        login: (value) => dispatch({ type: LOGIN, payload: value }),
    }
}

const mapStateToProps = (state) => {
    return {
        params: state.user,
        email: state.user.email,
        password: state.user.password,
        logged: state.user.logged
    };
}

export default connect(mapStateToProps, mapDispactchToProps)(Login)