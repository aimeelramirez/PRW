import React, { useState } from 'react';
import { data } from '../../data';
import Post from '../../components/post/Post'
import { FetchCardAvatars } from '../../reducers/action/fetchAvatar'
import { GetEditForm } from '../action/error'
import { updateObject } from '../utility';

const DeletePost = () => {
    const [state, setState] = useState({ posts: data });
    //get edit
    const editPost = (post) => {
        console.log("edit post button: Todo ", post)
        GetEditForm(post)
        let getUpdate = updateObject({ posts: data })
        console.log(getUpdate)

    }
    //get remove
    const removePost = (post) => {
        const newPostValue = state.posts;
        let review = ""
        console.log("This is getting deleted: ", post)
        for (var i = 0; i < newPostValue.length; i++) {
            if (newPostValue[i] === post) {
                newPostValue.splice(i, 1);
                review = newPostValue
            }
            FetchCardAvatars()
            setState({ posts: review });
        }
    }
    const Main = () => {
        return state.posts.map(post => {
            return (
                <Post
                    key={parseInt(post.text)}
                    text={post.text}
                    name={post.name}
                    message={post.message}
                    clicked={() => {
                        removePost(post)
                    }}
                    edit={() => {
                        editPost(post)
                    }}
                />
            );
        })
    }
    FetchCardAvatars()

    return (
        <Main />
    )
};

export default DeletePost;