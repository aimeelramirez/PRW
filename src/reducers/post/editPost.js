// import React, { useReducer, useState, useContext } from "react";
// import Button from "./../../components/button/Button";
// import { useHistory } from "react-router-dom";

// import { FiSend, FiX } from "react-icons/fi";
// const Edit = () => {
//     let history = useHistory()
//     console.log("history on edit: ", history)
//     const [state, setState] = useState({
//         newPost: "",
//     });
//     const [stateHistory, setHistory] = useState(history);
//     const [editId, setEdit] = useState(false);

//     const handleChange = (event) => {
//         setState({ newPost: event.target.value });
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setState({ newPost: event.target.value });

//         // let getItems = localStorage.getItems("names")
//         // let readItems = JSON.parse(getItems)
//         // console.log(readItems)
//         // console.log(state)
//         return history.replace("/", {
//             newPost: state.newPost,
//             post: history.location.state.post,
//             posts: history.location.state.posts
//         })
//     }

//     return (
//         <div id="modal-message" onSubmit={handleSubmit}>
//             <h3>Under Construction!</h3>
//             <p>Message: </p>
//             <textarea
//                 value={state.newPost}
//                 onChange={handleChange} />
//             <div id="buttons-modal">
//                 <Button type="button" onClick={hideModal}>
//                     <strong> Close</strong>
//                     <FiX />
//                 </Button>
//                 <Button type="button" onClick={handleSubmit}>
//                     <strong> Submit</strong>
//                     <FiSend />
//                 </Button>
//             </div>
//         </div>)
// }
// export default Edit;