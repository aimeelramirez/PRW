import React, { useReducer, useState, useContext } from "react";
import * as actionTypes from "../action/action";
import { useHistory } from "react-router-dom";

// import { data } from '../../data';
// import DeletePost from './deletePost'
// import { FetchCardAvatars } from '../action/fetchAvatar'
// import { updateObject } from '../utility';
import MainButton from "../../components/button/mainButton";
import { GetError, GetSuccess, GetEditForm } from "../action/notification";
import Modal from "../../components/modal/modal";
import Post from "../../components/post/Post";
import { ApiContext } from "./../../Context";
// import { QuotesApiContext } from './quotes'
import Edit from './editPost'
// import {
//     useHistory
// } from "react-router-dom";
// let getUpdate = ""
const initialState = {
  posts: [],
  post: {
    name: "",
    message: "",
  },
};
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
  // console.log("Sending to delete action before: ", action)
  // console.log("Sending to delete state before: ", state)
  // state.posts.filter(item => item.name !== action.name)
  let post = action.post;
  // let review = ""
  for (var i = 0; i < state.posts.length; i++) {
    if (state.posts[i] === post) {
      state.posts.splice(i, 1);
      // review = state.posts
    }
    // FetchCardAvatars()
  }
  // console.log("Sending to delete action after: ", action)
  // console.log("Sending to delete state: ", state)
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
  state.posts = action.posts;
  console.log("compare the update: ", action.posts);
  console.log("compare the state: ", state.posts);
  let post = action.post;
  // let review = ""
  for (var i = 0; i < state.posts.length; i++) {
    if (state.posts[i] === post) {
      state.posts[i].message = post.message
      // review = state.posts
    }
    // FetchCardAvatars()
  }
  return state;
};
const UpdatePost = () => {
  let history = useHistory()
  // console.log(history)
  const [state, dispatch] = useReducer(reducer, initialState);

  const [statePosts, setState] = useState({
    post: "",
    posts: initialState,
  });
  const [statePost, setStatePost] = useState({
    post: "",
  });
  const [stateModal, setStateModal] = useState({
    show: false,
  });
  const getContext = useContext(ApiContext);
  // const getQuotesContext = useContext(QuotesApiContext)

  // console.log("context: ", getContext)
  // console.log("quotes: ", getQuotesContext)

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   // console.log(event)
  //   event.target.reset();
  // };
  const handleClick = (event) => {
    event.preventDefault();
    // console.log(event.target[0])
    // console.log(event.target[1])
    let message = event.target[0].value;
    if (message === "") {
      let text = "Please fill in message!";
      GetError(text);
      return false;
    } else if (message !== "") {
      let stringKey = state.posts.length.toString();
      let post = {};
      console.log("state: ", state.posts.length);
      let num = Math.random() * Math.floor(24);
      let context = Object.values(getContext);
      let user = context[num.toFixed()];
      //console.log(context[num.toFixed()].picture.large)
      if (state.posts.length === 0) {
        post = {
          picture: user.picture.large,
          text: stringKey,
          title: user.name.title,
          first: user.name.first,
          last: user.name.last,
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
            text: stringKey,
            title: user.name.title,
            first: user.name.first,
            last: user.name.last,
            message: message,
            email: user.email,
          };
        } else {
          stringKey = (num + 1).toString();
          post = {
            picture: user.picture.large,
            text: stringKey,
            title: user.name.title,
            first: user.name.first,
            last: user.name.last,
            message: message,
            email: user.email,
          };
        }
      }
      let newState = [...state.posts, post];
      let confirm = "Success!";
      statePosts.posts = newState;
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


  //get edit
  const editPost = (e, post) => {
    e.preventDefault()
    console.log("edit post button: Todo ", post)
    // let getUpdate = updateObject({ posts: data })
    // console.log(getUpdate)
    statePost.post = post;




    //passing state up with dispatching
    setStatePost({ post: post });
    setStateModal({ show: true });
    if (history.location.state.post === undefined) {
      return history.push("/Edit", {
        post: post,
        posts: initialState,
      })
    } else {
      console.log(history)
      setStatePost({ post: history.location.state.post });

      // history.push("/Edit", { post: post })
      //return history.push("/", { post: history.location.state.post })
    }
    console.log(statePosts.post)




    // let newState = [...state.posts, readPost];

    // dispatch({
    //   type: actionTypes.UPDATE_POST,
    //   posts: state,
    //   post: readPost
    // });





  };

  //get deletePost
  const removePost = (e, post) => {
    e.preventDefault();
    // console.log(post)
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
        <div key={index} id="Post-item">
          <div>
            <Modal
              show={stateModal.show}

            >
              {statePost.post}
            </Modal>
          </div>
          <div>
            <Post
              key={index.toString()}
              first={item.first}
              last={item.last}
              title={item.title}
              email={item.email}
              picture={item.picture}
              message={item.message}
              clicked={(e) => {
                removePost(e, item);
              }}
              edit={(e) => {
                editPost(e, item);
              }}
            />
          </div>
        </div>
      );
    });
  };
  //FetchCardAvatars()

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

          <MainButton type="submit" >
            Submit
          </MainButton>
        </form>
      </div>
      <div id="delete-container">
        <Main />
      </div>
    </div>
  );
};

export default UpdatePost;
