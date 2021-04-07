
import React, { useReducer, useState, useContext, useEffect } from "react";
import Button from "./../../../components/button/Button";
import { useHistory } from 'react-router'
import Post from './../../../components/post/Post'
import Spinner from './../../../components/spinner/spinner'
import { FiX, FiSave } from "react-icons/fi";
import * as actionTypes from "./../../../reducers/action/action";
import { GetError, GetSuccess, GetEditForm } from "./../../../reducers/action/notification";
import { ApiContext } from "./../../../Context";
import Modal from './../../../components/modal/modal'
// import { backupUsers } from './../../middle/users/backup'
const initialState = {
    posts: []
}


/* 
 This is for inbox on Messages
 */

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return handlePost(state, action);
        case actionTypes.REMOVE_POST:
            return handleDelete(state, action);
        case actionTypes.UPDATE_POST:
            return handleUpdate(state, action);
        default:
            return state;
    }
};
const handleDelete = (state, action) => {
    let post = action.post;

    for (var i = 0; i < state.posts.length; i++) {
        if (state.posts[i] === post) {
            state.posts.splice(i, 1);
        }

    }

    return state;
};
const handlePost = (state, action) => {
    //to update state using setState
    state.posts = action.posts;
    console.log("compare the update: ", action.posts);
    console.log("compare the state: ", state.posts);
    return state;
};
const handleUpdate = (state, action) => {
    //to update state using setState
    console.log("update action: ", action.posts);
    console.log("update state: ", state.posts);
    return state
};
const Inbox = () => {
    let history = useHistory()
    console.log(history)

    const [state, dispatch] = useReducer(reducer, initialState);

    const [statePosts, setState] = useState({
        post: "",
        oldPost: "",
        posts: [],
    });

    const [stateModal, setStateModal] = useState({
        show: false,
    });

    let [newPost,] = useState('');


    //localStorage on messages
    useEffect(() => {
        // let items = []
        const json = JSON.stringify(newPost);
        localStorage.setItem("messages", json);
        console.log(state.posts.length)
        setInterval(() => {

            localStorage.getItem("inbox");
            localStorage.setItem("inbox", JSON.stringify(state.posts));


        }, 2000);


    }, [newPost, state]);

    const getContext = useContext(ApiContext);
    let getItems = localStorage.getItem("inbox");

    if (getContext === null) {
        if (getItems > 0) {
            //getItems = state.posts
            // state.posts = getItems;
            localStorage.setItem("inbox", JSON.stringify(state.posts));
        }
    }


    let context = Object.values(JSON.parse(getItems));
    console.log(context)
    const handleClick = (event) => {
        event.preventDefault();
        let message = event.target[0].value;
        if (message === "") {
            let text = "Please fill in message!";
            GetError(text);
            return false;
        } else if (message !== "") {
            let stringKey = state.posts.length;
            let post = {};
            console.log("state: ", state.posts.length);
            let num = Math.random() * Math.floor(24);

            let user = context[num.toFixed()];
            if (user !== "") {
                state.posts = history.location.state.posts
                user = state.posts[num.toFixed()];

                //console.log(context[num.toFixed()].picture.large)
                if (state.posts.length === 0) {
                    post = {
                        picture: user.picture.large,
                        id: stringKey,
                        name: {
                            title: user.name.title,
                            first: user.name.first,
                            last: user.name.last,
                        },
                        message: message,
                        email: user.email,
                    };
                    console.log("posted: ", post);
                }
                for (let i = 0; i < state.posts.length; i++) {
                    let num = parseInt(state.posts[i].text);

                    if (num !== stringKey) {
                        post = {
                            picture: user.picture,
                            id: stringKey,
                            name: {
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                            },
                            message: message,
                            email: user.email,
                        };
                    } else {
                        stringKey = (num + 1).toString();
                        post = {
                            picture: user.picture.large,
                            id: stringKey,
                            name: {
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                            },
                            message: message,
                            email: user.email,
                        };
                    }
                }
            } else {
                state.posts = history.location.state.posts
                user = state.posts[num.toFixed()];

                //console.log(context[num.toFixed()].picture.large)
                if (state.posts.length === 0) {
                    post = {
                        picture: user.picture,
                        id: stringKey,
                        name: {
                            title: user.name.title,
                            first: user.name.first,
                            last: user.name.last,
                        },
                        message: message,
                        email: user.email,
                    };
                    console.log("posted: ", post);
                }
                for (let i = 0; i < state.posts.length; i++) {
                    let num = parseInt(state.posts[i].text);

                    if (num !== stringKey) {
                        post = {
                            picture: user.picture.large,
                            id: stringKey,
                            name: {
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                            },
                            message: message,
                            email: user.email,
                        };
                    } else {
                        stringKey = (num + 1).toString();
                        post = {
                            picture: user.picture.large,
                            id: stringKey,
                            name: {
                                title: user.name.title,
                                first: user.name.first,
                                last: user.name.last,
                            },
                            message: message,
                            email: user.email,
                        };
                    }
                }

            }
            let newState = [...state.posts, post];
            let confirm = "Success!";
            statePosts.posts = newState;
            statePosts.post = post
            state.post = post
            dispatch({
                type: actionTypes.ADD_POST,
                posts: newState,
                post: post,
                confirm: confirm,
            });
            // //for delete method
            setState({
                posts: newState,
            });
            //passing state up with dispatching
            GetSuccess(confirm);
        }
        event.target.reset();
    }

    function handleSubmit(e) {
        e.preventDefault() // stops default reloading behaviour
        console.log(e.target[0].value);
        newPost = e.target[0].value

        const json = localStorage.getItem("messages");
        const savedPost = JSON.parse(json);
        console.log(savedPost)
        //set  a new array for thrown issues
        let newArray = [...state.posts]
        newArray.map((item) => {
            //set this name to be read as new value to match
            if (item.message === statePosts.oldPost) {
                item.message = newPost
            }
            return item;

        });
        state.post = newPost

        dispatch({
            type: actionTypes.UPDATE_POST,
            posts: newArray,
            post: state.post
        });
        setStateModal({ show: false });
        e.target.reset()

        submitModal()
    }

    const editPost = (e, post) => {
        e.preventDefault()
        setStateModal({ show: true });
        setState({
            posts: state.posts,
            oldPost: post.message,
            post: ""
        });

    };
    const submitModal = () => {
        let message = "Success!";
        GetSuccess(message);
        setStateModal({ show: false });

    };

    const hideModal = () => {
        let message = "Disregarded for edits.";
        setStateModal({ show: false });
        GetEditForm(message);
        return false;
    };
    //get deletePost
    const removePost = (e, post) => {
        e.preventDefault();
        setState({
            posts: state.posts,
            post: post,
        });
        state.post = post;
        dispatch({
            type: actionTypes.REMOVE_POST,
            posts: state.posts,
            post: state.post,
        });

        // FetchCardAvatars()
        let message = "This is getting deleted: " + JSON.stringify(post.first);
        GetSuccess(message);
    };
    const Main = () => {
        return state.posts.map((item, index) => {
            return (
                <li key={index} id="Post-item">
                    <div>
                        <Modal
                            show={stateModal.show}>
                            <form onSubmit={handleSubmit} >
                                <div id="modal-message">
                                    <h3>Edit Your Post.</h3>
                                    <textarea
                                        type="text"
                                        name="message" />
                                    <div id="buttons-modal">
                                        <Button type="button">
                                            <strong> Submit</strong>
                                            <FiSave />
                                        </Button>
                                        <Button type="button" onClick={hideModal}>
                                            <strong> Close</strong>
                                            <FiX />
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Modal>
                    </div>

                    <Post
                        key={index}
                        first={item.name.first}
                        last={item.name.last}
                        title={item.name.title}
                        email={item.email}
                        picture={item.picture.large}
                        message={item.message}
                        clicked={(e) => {
                            removePost(e, item);
                        }}
                        edit={(e) => {
                            editPost(e, item);
                        }}
                    />
                </li>
            );
        });
    };

    if (state.posts.length > 0) {

        return (<div id="post-container" >
            <div id="form-container">
                <form onSubmit={handleClick}>
                    <label>Create a Post:</label>
                    <input
                        type="text"
                        name="message"
                        placeholder="What's on your mind?"
                    />
                    <Button type="submit" >
                        Submit
                     </Button>
                </form>
            </div>
            <h2 style={styles.h2}>Inbox:</h2>
            <ul id="delete-container">
                <Main />
            </ul>
        </div >)
    }
    if (statePosts.posts.length === 0) {

        return (
            <div id="post-container">
                <div id="form-container">
                    <form onSubmit={handleClick}>
                        <label>Create a Post:</label>
                        <input
                            type="text"
                            name="message"
                            placeholder="What's on your mind?"
                        />
                        <Button type="submit" >
                            Submit
                  </Button>
                    </form>
                </div>
                <section id="delete-container" style={styles.article}>
                    <h2 style={styles.h2}>Inbox:</h2>
                    <article>
                        <p>Leave a message!</p>
                    </article>
                </section>
            </div>
        );
    };
    //return spinner if all else fails
    return (<Spinner />)
}


const styles = {
    h2: {
        margin: 'auto 0',
        display: 'block',
        textAlign: 'center'

    },
    article: {
        textAlign: 'center',
        margin: '0 auto',
        display: 'block',
        boxShadow: '0 2px 3px #ccc',
        marginTop: '50px',


    }



}



export default Inbox;