import React, { useState } from 'react';
import { data } from '../../data';
import Post from '../../components/post/Post'

const DeletePost = () => {
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
                    message={post.message}
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

export default DeletePost;