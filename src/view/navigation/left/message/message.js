import React, { useReducer, useState } from 'react';
import * as actionTypes from '../../../../reducers/action/action';
import { data } from './../../../../data';
import UpdatePost from '../../../../reducers/post/post'

const initialState = {
    posts: data,
    post: {
        name: "",
        email: ""
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST:
            console.log("hello")
            return handlePost(state, action)
        default:
            return state;
    }

}
const handlePost = (state, action) => {
    return {
        posts: state.posts,
        post: action.post
    }
}
const Message = () => {
    // const [state, setState] = useState(initialState);

    const [state, dispatch] = useReducer(reducer, initialState)
    const handleChange = (event) => {
        event.preventDefault()
        console.log("event on change: ", event.target.value)
        // dispatch({
        //     post: event.target

        // });
        event.target.reset()

    }
    const handleClick = (event) => {
        event.preventDefault()
        console.log(event.target[0])
        console.log(event.target[1])
        let email = event.target[0].value
        let name = event.target[1].value
        let string = initialState.posts.length;

        let post = {
            text: string.toString(),
            name: name,
            email: email
        }
        // let review = ""
        console.log(event)
        dispatch({
            type: actionTypes.ADD_POST,
            posts: data.push(post),
            post: post
        })
        // setState({
        //     type: actionTypes.ADD_POST,
        //     posts: state.posts,
        //     post: post
        // })
        event.target.reset()
    }
    return (<div>

        <UpdatePost />
        <form onSubmit={handleClick}>
            <label>Email:</label>
            <input type="text" />
            <label>Name:</label>
            <input type="text" />
            <button type="submit" onChange={handleChange}>Submit</button>
        </form></div>
    )


}
export default Message;