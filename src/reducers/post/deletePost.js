import React, { useState } from 'react';
import { data } from '../../data';
import Post from '../../components/post/Post'
import { FetchCardAvatars } from '../../reducers/action/fetchAvatar'
// import { GetSuccess } from './../action/notification'
// import { updateObject } from '../utility';
import { GetEditForm, GetSuccess } from './../action/notification'
import Modal from './../../components/modal/modal'

const DeletePost = () => {
    const [state, setState] = useState({
        posts: data
    });
    const [statePost, setStatePost] = useState({
        post: ""
    });
    const [stateModal, setStateModal] = useState({
        show: false
    });
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
    const submitModal = () => {
        let message = "Under Construction, to be submitted for edits."
        setStateModal({ show: false });
        GetSuccess(message);
        return false;
    };
    const hideModal = () => {
        let message = "Disregarded for edits."
        setStateModal({ show: false });
        GetEditForm(message);
        return false;

    };
    //get remove
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
    }
    const Main = () => {
        return state.posts.map(post => {
            return (
                <div key={parseInt(post.text)}>
                    <Modal show={stateModal.show} handleClose={hideModal} handleSubmit={submitModal}>
                        {statePost.post}
                    </Modal>
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
                    /></div>
            );
        })
    }
    //reload if to send the page
    FetchCardAvatars()
    return (
        <div>
            <Main />
        </div>
    )
};

export default DeletePost;