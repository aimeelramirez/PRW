import React, { useState } from 'react';

import { data } from '../../data';
import Post from '../../view/Post'

const RemovePost = () => {
    const [state, setState] = useState({ posts: data });
    const removePost = (post) => {
        const newPostValue = state.posts;
        let review = ""
        console.log("this is getting called")
        for (var i = 0; i < newPostValue.length; i++) {

            if (newPostValue[i] === post) {

                newPostValue.splice(i, 1);
                review = newPostValue
            }
            setState({ posts: review });

        }
    }
    return (

        data.map(post => {
            return (
                <Post
                    key={parseInt(post.text)}
                    text={post.text}
                    name={post.name}
                    price={post.price}
                    clicked={() => {
                        removePost(post)
                    }}
                />
            );
        })


    )
};

export default RemovePost;