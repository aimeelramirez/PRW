import React, { useReducer, useState, useContext } from "react";
import Button from "./../../components/button/Button";
import { useHistory } from "react-router-dom";

import { FiSend, FiX } from "react-icons/fi";
const Edit = () => {
    let history = useHistory()
    const [state, setState] = useState({
        post: "",
    });
    const handleChange = (event) => {
        setState({ post: event.target.value });
    }

    const handleSubmit = (event) => {
        console.log(state);
        let getItems = localStorage.getItems("names")
        let readItems = JSON.parse(getItems)
        console.log(readItems)
        return history.replace("/", { post: state.post })
        event.preventDefault();
    }
    //under construction
    const submitModal = () => {
        let message = "Under Construction, to be submitted for edits.";
        // setStateModal({ show: false });
        // GetSuccess(message);
        return false;
    };
    //under construction
    const hideModal = () => {
        let message = "Disregarded for edits.";
        // setStateModal({ show: false });
        // GetEditForm(message);
        return false;
    };
    return (
        <div id="modal-message" onSubmit={handleSubmit}>
            <h3>Under Construction!</h3>
            <p>Message: </p>
            <textarea
                value={state.post}
                onChange={handleChange} />
            <div id="buttons-modal">
                <Button type="button" onClick={hideModal}>
                    <strong> Close</strong>
                    <FiX />
                </Button>
                <Button type="button" onClick={handleSubmit}>
                    <strong> Submit</strong>
                    <FiSend />
                </Button>
            </div>
        </div>)
}
export default Edit;