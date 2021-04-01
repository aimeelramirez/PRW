import React, { useReducer, useState, useContext } from "react";
import * as actionTypes from "../action/action";
import Button from "./../../components/button/Button";
import { FiSave, FiX } from "react-icons/fi";
import Spinner from './../../components/spinner/spinner';
import MainButton from "../../components/button/mainButton";
import { GetError, GetSuccess, GetEditForm } from "../action/notification";
import Modal from "../../components/modal/modal";
import Post from "../../components/post/Post";
import { ApiContext } from "./../../Context";


/*
 This is for updating posts on Home to join with api to be read
 */
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

  let post = action.post;
  for (var i = 0; i < state.posts.length; i++) {
    if (state.posts[i] === post) {
      state.posts.splice(i, 1);
    }
  }

  return state;
};
const handlePost = (state, action) => {
  //to update state using setState
  state.posts = action.posts;
  // console.log("compare the update: ", action.posts);
  // console.log("compare the state: ", state.posts);
  return state;
};
const handleUpdate = (state, action) => {
  //to update state using setState
  // console.log("update action: ", action.posts);
  // console.log("update state: ", state.posts);
  return state
};
const UpdatePost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [statePosts, setState] = useState({
    post: "",
    oldPost: "",
    posts: [],
  });

  const [stateModal, setStateModal] = useState({
    show: false,
  });

  let [newPost,] = useState('');
  const getContext = useContext(ApiContext);
  let context = Object.values(getContext);

  const handleClick = (event) => {

    event.preventDefault();
    let message = event.target[0].value;
    if (message === "") {
      let text = "Please fill in message!";
      GetError(text);
      return false;
    } else if (message !== "") {
      let stringKey = state.posts.length;
      let post = {};
      console.log("state: ", state.posts.length);
      let num = Math.random() * Math.floor(24);
      let user = context[num.toFixed()];
      //console.log(context[num.toFixed()].picture.large)
      if (state.posts.length === 0) {
        post = {
          picture: user.picture.large,
          id: stringKey,
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
            id: stringKey,
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
            id: stringKey,
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
      statePosts.post = post
      state.post = post
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
      //get
      const json = localStorage.getItem("messages");
      let savedPost = JSON.parse(json);
      savedPost += post

      //set
      const jsonSend = JSON.stringify(post);
      localStorage.setItem("messages", jsonSend);
      //get

      let getItems = localStorage.getItem("names")
      const json1 = JSON.parse(getItems);
      json1.push(post)

      //set
      localStorage.setItem("names", JSON.stringify(json1));
    }
    event.target.reset();
  }

  function handleSubmit(e) {
    e.preventDefault() // stops default reloading behaviour
    console.log(e.target[0].value);

    newPost = e.target[0].value
    //set  a new array for thrown issues
    let newArray = [...state.posts]
    newArray.map((item) => {
      //set this name to be read as new value to match
      if (item.message === statePosts.oldPost) {
        item.message = newPost
      }
      return item;

    });
    state.post = newPost

    dispatch({
      type: actionTypes.UPDATE_POST,
      posts: newArray,
      post: state.post
    });
    setStateModal({ show: false });
    e.target.reset()

    submitModal()
  }

  const editPost = (e, post) => {
    e.preventDefault()
    setStateModal({ show: true });
    setState({
      posts: state.posts,
      oldPost: post.message,
      post: ""
    });

  };
  const submitModal = () => {
    let message = "Success!";
    GetSuccess(message);
    setStateModal({ show: false });

  };

  const hideModal = () => {
    let message = "Disregarded for edits.";
    setStateModal({ show: false });
    GetEditForm(message);
    return false;
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

    let message = "This is getting deleted: " + JSON.stringify(post.first);
    GetSuccess(message);
  };
  const Main = () => {
    console.log("called")
    return state.posts.map((item, index) => {
      return (
        <li key={index} id="Post-item">
          <div>
            <Modal
              show={stateModal.show}>
              <form onSubmit={handleSubmit} >
                <div id="modal-message">
                  <h3>Edit Your Post.</h3>
                  <textarea
                    type="text"
                    name="message" />
                  <div id="buttons-modal">
                    <Button type="button">
                      <strong> Submit</strong>
                      <FiSave />
                    </Button>
                    <Button type="button" onClick={hideModal}>
                      <strong> Close</strong>
                      <FiX />
                    </Button>
                  </div>
                </div>
              </form>
            </Modal>
          </div>
          <div>
            <Post
              key={index}
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
        </li>

      );
    });
  };
  if (state.posts.length > 0) {
    return (<div id="post-container" >
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
      <h2>Feed:</h2>
      <ul id="delete-container">
        <Main />
      </ul>
    </div >)
  } else if (state.posts.length === 0) {
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
        <section id="delete-container" style={styles.article}>
          <h2 style={styles.h2}>Feed:</h2>
          <article>
            <p>What is on your mind? </p>
          </article>
        </section>
      </div>
    );
  };
  //return spinner if all else fails
  return (<Spinner />)
}


const styles = {
  h2: {
    margin: 'auto 0',
    display: 'block',
    textAlign: 'center'

  },
  article: {
    textAlign: 'center',
    margin: '0 auto',
    display: 'block',
    boxShadow: '0 2px 3px #ccc',
    marginTop: '50px',


  }



}
export default UpdatePost;
