import React, { useState, useReducer } from 'react';
import * as actionTypes from '../action/action';
import { data } from '../../data';
import Post from '../../view/Post'
// const initialState = {
//     posts: data,

// }

const UpdatePost = () => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [state, setState] = useState({ posts: data });
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
            setState({ posts: review });
        }
    }
    const Main = () => {
        return data.map(post => {
            return (
                <Post
                    key={parseInt(post.text)}
                    text={post.text}
                    name={post.name}
                    email={post.email}
                    clicked={() => {
                        removePost(post)
                    }}
                />
            );
        })
    }

    return (
        <Main />
    )
};

export default UpdatePost;