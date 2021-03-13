import React, { useReducer } from 'react';
import * as actionTypes from '../action/action';
import { data } from '../../data';
import DeletePost from './deletePost'

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
    //console.log(action)
    console.log(state)
    return {
        posts: state.posts,
        post: action.post
    }
}
const AddPost = () => {
    // const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (event) => {
        event.preventDefault()
        // console.log(event)
        event.target.reset()
    }
    const handleClick = (event) => {
        event.preventDefault()
        console.log(event.target[0])
        console.log(event.target[1])
        let message = event.target[0].value
        let name = event.target[1].value
        let stringKey = initialState.posts.length.toString();
        let post = {}
        for (let i = 0; i < initialState.posts.length; i++) {
            let num = parseInt(initialState.posts[i].text)
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
        state.posts.push(post)
        dispatch({
            type: actionTypes.ADD_POST,
            posts: state.posts,
            post: post
        })
        event.target.reset()
    }
    return (<div>
        <div id="hello">
            <DeletePost />
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
            <button type="submit" onChange={handleChange}>Submit</button>
        </form></div>
    )

}
export default AddPost;