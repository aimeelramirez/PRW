import React, { useReducer } from 'react';
import * as actionTypes from '../action/action';
import { data } from '../../data';
import DeletePost from './deletePost'
import { FetchCardAvatars } from '../../reducers/action/fetchAvatar'
import { updateObject } from '../utility';
import MainButton from '../../components/button/mainButton'
import { GetError, GetSuccess } from '../action/notification';
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
    // console.log(action)
    //passing state up with dispatching
    GetSuccess(action.confirm)
    FetchCardAvatars()
    return {
        posts: state.posts,
        post: action.post
    }
}
const AddPost = () => {
    // const [item, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState)

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
            let posts = [...initialState.posts, post]
            //this is the same as action on reducer above
            let getUpdate = updateObject({
                posts,
                post

            })
            //console.log(getUpdate)
            //** the only way i can get the page to reload with data shown...
            state.posts.push(post)
            let confirm = "Success!"

            // setState(() => ({ posts: getUpdate.posts }))
            dispatch({
                type: actionTypes.ADD_POST,
                posts: getUpdate.posts,
                post: post,
                confirm: confirm

            })
        }
        event.target.reset()
    }
    return (<div>
        <div id="delete-container">
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
            <MainButton type="submit" onChange={handleChange}>Submit</MainButton>
        </form></div>
    )

}
export default AddPost;