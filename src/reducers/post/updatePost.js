import React, { useReducer, useState } from 'react';
import * as actionTypes from '../action/action';
import { data } from '../../data';
// import DeletePost from './deletePost'
import { FetchCardAvatars } from '../action/fetchAvatar'
import { updateObject } from '../utility';
import MainButton from '../../components/button/mainButton'
import { GetError, GetSuccess, GetEditForm } from '../action/notification';
import Modal from '../../components/modal/modal'
import Post from '../../components/post/Post'

let getUpdate = ""
const initialState = {
    posts: data,
    post: {
        name: "",
        message: ""
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            return handlePost(state, action)
        default:
            return state;
    }

}
const handlePost = (state, action) => {
    //passing state up with dispatching
    GetSuccess(action.confirm)
    console.log("compare the state: ", state.posts)
    //to update state using setState
    // state.posts = action.posts
    console.log("compare the update: ", action.posts)

    return {
        posts: action.posts,
        post: action.post
    }
}
const UpdatePost = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [statePosts, setState] = useState({
        posts: state.posts
    });
    const [statePost, setStatePost] = useState({
        post: ""
    });
    const [stateModal, setStateModal] = useState({
        show: false
    });
    const handleChange = (event) => {
        event.preventDefault()
        // console.log(event)
        event.target.reset()
    }
    const handleClick = (event) => {
        event.preventDefault()
        // console.log(event.target[0])
        // console.log(event.target[1])
        let message = event.target[0].value
        let name = event.target[1].value
        if (name === "") {
            let text = "Please fill in name!";
            GetError(text);
            return false;
        }
        else if (message === "") {
            let text = "Please fill in message!";
            GetError(text);
            return false;
        }
        else if (name !== "" && message !== "") {
            let stringKey = state.posts.length.toString();
            let post = {}
            for (let i = 0; i < state.posts.length; i++) {
                let num = parseInt(state.posts[i].text)
                if (num !== stringKey) {
                    post = {
                        text: stringKey,
                        name: name,
                        message: message
                    }
                } else {
                    stringKey = (num + 1).toString()
                    post = {
                        text: stringKey,
                        name: name,
                        message: message
                    }
                }

            }

            // let review = ""
            // console.log(event)
            let posts = [...state.posts, post]
            // //this is the same as action on reducer above
            getUpdate = updateObject({
                posts,
                post

            })
            console.log(getUpdate)
            //** the only way i can get the page to reload with data shown...
            // state.posts.push(post)
            let newState = [...state.posts, post]
            let confirm = "Success!"

            dispatch({
                type: actionTypes.ADD_POST,
                posts: newState,
                post: post,
                confirm: confirm

            })
            //for delete method
            setState({
                posts: newState
            })
        }
        event.target.reset()
    }

    //get edit
    const editPost = (post) => {
        // console.log("edit post button: Todo ", post)
        // let getUpdate = updateObject({ posts: data })
        // console.log(getUpdate)
        statePost.post = post;
        //console.log(post)
        let showText = <div id="modal-message"><h3>Under Construction!</h3><p>Name:</p><input placeholder={post.name} /><p>Message: </p><textarea id="modal-textarea" placeholder={post.message} /></div>
        setStatePost({ post: showText })
        setStateModal({ show: true });
    }
    //under construction
    const submitModal = () => {
        let message = "Under Construction, to be submitted for edits."
        setStateModal({ show: false });
        GetSuccess(message);
        return false;
    };
    //under construction
    const hideModal = () => {
        let message = "Disregarded for edits."
        setStateModal({ show: false });
        GetEditForm(message);
        return false;

    };
    //get deletePost
    const removePost = (post) => {
        const newPostValue = state.posts;
        let review = ""
        for (var i = 0; i < newPostValue.length; i++) {
            if (newPostValue[i] === post) {
                newPostValue.splice(i, 1);
                review = newPostValue
            }

            FetchCardAvatars()
            setState({ posts: review });
        }
        let message = "This is getting deleted: " + JSON.stringify(post);
        GetSuccess(message)
        console.log("Check delete state: ", statePosts)

    }
    const Main = () => {
        return state.posts.map((post, index) => {
            return (
                <div key={index}>
                    <div>
                        <Modal show={stateModal.show} handleClose={hideModal} handleSubmit={submitModal}>
                            {statePost.post}
                        </Modal>
                    </div>
                    <div>
                        <Post
                            key={parseInt(post.txt)}
                            text={post.txt}
                            name={post.name}
                            message={post.message}
                            clicked={() => {
                                removePost(post)
                            }}
                            edit={() => {
                                editPost(post)
                            }}
                        /></div></div>
            );
        })
    }
    FetchCardAvatars()

    return (<div>
        <div id="delete-container">
            {/* <DeletePost /> */}
            <Main />
        </div>
        <form onSubmit={handleClick} >
            <label>Leave a Message:</label>
            <p>
                <textarea type="text" name="message" />
            </p>
            <label>Name:</label>
            <p>
                <input type="text" name="name" />
            </p>
            <MainButton type="submit" onChange={handleChange}>Submit</MainButton>
        </form></div>
    )

}
export default UpdatePost;