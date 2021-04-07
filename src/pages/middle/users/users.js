import React, { useReducer, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as actionTypes from "./../../../reducers/action/action";
import {
  GetSuccess,
  GetError,
  GetEditForm
} from "./../../../reducers/action/notification";
import { FiSave, FiX } from "react-icons/fi";
import Spinner from "./../../../components/spinner/spinner";
import Contact from "./../../../components/contact/contact";
import { ApiContext } from "./../../../Context";
import Message from "./../../left/message/message";
import Button from "./../../../components/button/Button";
import Modal from "./../../../components/modal/modal";
// import { backup } from './../../left/watch/backup'
import { backupUsers } from './backup'
/*
 This is for this is loading users on the home page to be edited and interacted with.
 */
let initialState = {
  contact: [

  ],
  quotes: [
    "I think you can have moderate success by copying something else, but if you really want to knock it out of the park, you have to do something different and take chances.",
    "The more you know yourself, the more you forgive yourself.",
    "A prudent question is one half of wisdom.",
    "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more",
    "Conflict is the gadfly of thought. It stirs us to observation and memory. It instigates to invention. It shocks us out of sheeplike passivity, and sets us at noting and contriving.",
    "Ignorant men don't know what good they hold in their hands until they've flung it away.",
    "A man sees in the world what he carries in his heart.",
    "Silence is the true friend that never betrays.",
    "Strength to carry on despite the odds means you have faith in your own abilities and know how.",
    "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.",
    "Peace of mind is not the absence of conflict from life, but the ability to cope with it.",
    "Courage is not about taking risks unknowingly but putting your own being in front of challenges that others may not be able to.",
    "A single conversation across the table with a wise person is worth a months study of books.",
    "Worry gives a small thing a big shadow.",
    "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
    "What the caterpillar calls the end of the world, the master calls a butterfly.",
    "Go to your bosom: Knock there, and ask your heart what it doth know.",
    "Don't leave a stone unturned. It's always something, to know you have done the most you could.",
    "Mountains cannot be surmounted except by winding paths.",
    "The right way is not always the popular and easy way. Standing for right when it is unpopular is a true test of moral character.",
    "The awareness of our own strength makes us modest.",
    "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    "We must become the change we want to see.",
    "Make each day a new horizon",
    "Your ability to learn faster than your competition is your only sustainable competitive advantage.",
    "From wonder into wonder existence opens.",
    "Don't be afraid to go out on a limb. That's where the fruit is.",
    "Id rather regret the things that I have done than the things that I have not done.",
    "We are Divine enough to ask and we are important enough to receive.",
    "The past has no power to stop you from being present now. Only your grievance about the past can do that.",
  ],
  person: "",
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
  // //console.log("Sending to delete action before: ", action)
  // //console.log("Sending to delete state before: ", state)
  // state.posts.filter(item => item.name !== action.name)
  let post = action.post;
  // let review = ""
  for (var i = 0; i < state.posts.length; i++) {
    if (state.posts[i] === post) {
      state.posts.splice(i, 1);
      // review = state.posts
    }
    // const removedArr = [...todos].filter((todoId) => todoId.id !== id);

    // setStatePost(removedArr);
  }
  // //console.log("Sending to delete action after: ", action)
  // //console.log("Sending to delete state: ", state)
  return state;
};
const handlePost = (state, action) => {
  //to update state using setState
  state.posts = action.posts;
  //console.log("compare the update: ", action.posts);
  //console.log("compare the state: ", state.posts);
  return state;
};
const handleUpdate = (state, action) => {
  //to update state using setState
  //console.log("update action: ", action.posts);
  //console.log("update state: ", state.posts);
  return state
};
const Users = () => {
  let history = useHistory();
  const context = useContext(ApiContext);
  //response on fetch on let
  initialState.contact = context;

  let [stateAll,] = useState(initialState);
  let api = []
  let readApi = ""
  const [state, dispatch] = useReducer(reducer, initialState);
  const [statePosts, setState] = useState({
    post: "",
    oldPost: "",
    posts: [],
  });
  const [stateModal, setStateModal] = useState({
    show: false,
  });
  const onLoad = () => {
    if (history.location.state === undefined) {
      history.push(window.location.pathname, {
        data: backupUsers,
        posts: context,
        inbox: [],
        videos: []
      });
    }
    // readApi = history.location.state.posts.map((item, index) => {
    //   item.message = stateAll.quotes[index];
    //   api = {
    //     first: item.name.first,
    //     last: item.name.last,
    //     title: item.name.title,
    //     message: item.message,
    //     picture: item.picture.large
    //   }
    //   return api

    // })
    // return state.posts = context
  }
  onLoad()

  // useEffect(() => {
  //   return onLoad()

  // }, [onLoad])
  let [newPost,] = useState('');

  const likeButton = () => {
    let message = "You liked this post.";
    setStateModal({ show: false });
    GetSuccess(message);
    return false;
  };
  //under construction
  const dislikeButton = () => {
    let message = "Disliked this post.";
    setStateModal({ show: false });
    GetError(message);
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault() // stops default reloading behaviour
    //console.log(e.target[0].value);
    // setNewPost(e.target[0].value)
    if (e.target[0].value !== "") {
      newPost = e.target[0].value
      //console.log(e.target[0].value)
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
    } else {
      e.target.reset()
      return hideModal()
    }
  }

  const editPost = (e, post) => {
    e.preventDefault()
    setStateModal({ show: true });
    setState({
      posts: state.posts,
      oldPost: post.message,
      post: post
    });



  };
  const submitModal = () => {
    let message = "Success!";
    GetSuccess(message);
    setStateModal({ show: false });
    return state.posts

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
    //console.log(post)
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

  const UserItems = () => {
    let items = [];

    // readApi = stateAll.contact.map((item, index) => {
    //   item.message = stateAll.quotes[index];
    //   api = {
    //     first: item.name.first,
    //     last: item.name.last,
    //     title: item.name.title,
    //     message: item.message,
    //     picture: item.picture.large
    //   }
    //   return api

    // })
    // state.posts = readApi
    //return state.posts

    //save only names on localStorage for privacy if that was in real data
    state.posts.map((item, index) => {
      if (items.length <= 25) {
        // //console.log("for each:", index)
        items.push(item);

        localStorage.getItem("names");
        localStorage.setItem("names", JSON.stringify(items));
        //pass state in next component
      } else if (index >= 26 || items.length >= 26) {
        delete localStorage[index];
        localStorage.setItem("names", JSON.stringify(items));
      }
      return localStorage;
      //localStorage.clear();

    });

    let check = context.length > 0 && history.location.state === undefined;
    if (check === true) {
      console.log("context", context)
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
                        <strong>Close</strong>
                        <FiX />
                      </Button>
                    </div>
                  </div>
                </form>
              </Modal>
            </div>

            <Contact
              key={index.toString()}
              first={item.first}
              last={item.last}
              title={item.title}
              email={item.email}
              picture={item.picture}
              message={item.message}
              like={likeButton}
              dislike={dislikeButton}
              clicked={(e) => {
                removePost(e, item);
              }}
              edit={(e) => {
                editPost(e, item);
              }}

            />
          </li>
        );
      });
    }
  }
  if (state.posts === undefined) {
    //this is the data to be uniformed in parsing
    const onLoad = () => {
      if (history.location.state === undefined) {
        history.push(window.location.pathname, {
          data: backupUsers,
          posts: context,
          inbox: [],
          videos: []
        });
      }
      readApi = history.location.state.posts.map((item, index) => {
        item.message = stateAll.quotes[index];
        api = {
          name: {
            first: item.name.first,
            last: item.name.last,
            title: item.name.title,
          },
          message: item.message,
          picture: item.picture.large
        }
        return api

      })
      return state.posts = readApi
    }
    onLoad()
  }

  if (history.location.state !== undefined) {
    //console.log(state.posts)
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

          <Contact
            key={index.toString()}
            first={item.name.first}
            last={item.name.last}
            title={item.name.title}
            email={item.email}
            picture={item.picture}
            message={item.message}
            like={likeButton}
            dislike={dislikeButton}
            clicked={(e) => {
              removePost(e, item);
            }}
            edit={(e) => {
              editPost(e, item);
            }}

          />
        </li>
      );
    });
  }

  if (context.length === 0) {
    return <Spinner />;
  }
  //check the filtered item to get on the
  if (context.length > 0 && history.location.pathname === "/") {
    return (
      <>
        <Message />
        <UserItems />
      </>
    );
  }
};

export default Users;
