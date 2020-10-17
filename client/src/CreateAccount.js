import React from 'react';
import { connect } from "react-redux";
import { POST_EMAIL, POST_PASSWORD, POST_PICTURE } from "./store/actions/usersAction";
import axios from 'axios';
import HomeLink from './homeLink';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class CreateAccount extends React.Component {

    async handleSubmit(event) {
        let res = await axios.post('http://localhost:5000/users/', this.props.params);
        console.log(res.data);
        alert('An email was submitted: ' + this.props.email);
        event.preventDefault();
    }

    handleEmailChange(event) {
        this.props.crearEmail(event.target.value);
    }

    handlePasswordChange(event) {
        this.props.crearPassword(event.target.value);
    }

    handlePictureChange(event) {
        this.props.crearPicture(event.target.value);
    }

    render() {
        return ( <
            React.Fragment >
            <
            h1 className = "my-5" > Create Account < /h1> <
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
            Picture:
            <
            input placeholder = "Picture"
            type = "url"
            value = { this.props.picture }
            onChange = { this.handlePictureChange.bind(this) }
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
            Email:
            <
            input placeholder = "Email"
            type = "email"
            value = { this.props.email }
            onChange = { this.handleEmailChange.bind(this) }
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
            Password:
            <
            input placeholder = "Password"
            type = "password"
            value = { this.props.password }
            onChange = { this.handlePasswordChange.bind(this) }
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
        crearEmail: (value) => dispatch({ type: POST_EMAIL, payload: value }),
        crearPassword: (value) => dispatch({ type: POST_PASSWORD, payload: value }),
        crearPicture: (value) => dispatch({ type: POST_PICTURE, payload: value }),

    }
}

const mapStateToProps = (state) => {
    return {
        params: state.user,
        email: state.user.email,
        password: state.user.password,
        picture: state.user.picture
    };
}

export default connect(mapStateToProps, mapDispactchToProps)(CreateAccount)