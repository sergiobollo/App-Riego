import React, { Component } from 'react'
import { connect } from "react-redux";
import { HANDLE_CHANGE } from "./store/actions/cityActions";

class FilterForm extends Component {


    handleChange = (e) => {
        this.props.filtrarUsuarios(e.target.value)
        this.props.onChange(e.target.value)
    }

    render() {
        return ( <
            div >
            <
            label htmlFor = "filter" > Filtrar: < /label> <
            input type = "text"
            id = "filter"
            value = { this.props.cityFilter }
            onChange = { this.handleChange }
            /> < /
            div >
        )
    }
}

const mapDispactchToProps = (dispatch) => {
    return {
        filtrarUsuarios: (value) => {
            dispatch({ type: HANDLE_CHANGE, payload: value })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cityFilter: state.cityFilter.cityFilter
    }
}

export default connect(mapStateToProps, mapDispactchToProps)(FilterForm)