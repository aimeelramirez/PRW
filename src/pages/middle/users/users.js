import React, { useState, useContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
import * as actionTypes from "./../../../reducers/action/action";
import {
  GetSuccess,
  GetEditForm,
} from "./../../../reducers/action/notification";

import Spinner from "./../../../components/spinner/spinner";
import Contact from "./../../../components/contact/contact";
// import ShowFilter from './../search/filtered'
// import Button from './../../../components/button/Button'
import { ApiContext } from "./../../../Context";
import Message from "./../../left/message/message";
import Modal from "./../../../components/modal/modal";

// let arrayQuotes = []
let initialState = {
  contact: [],
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
let person = "";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_QUOTE:
      return handlequote(state, action);
    case actionTypes.REMOVE_QUOTE:
      return handleDelete(state, action);
    default:
      return state;
  }
};
const handleDelete = (state, action) => {
  // console.log("Sending to delete action before: ", action)
  // console.log("Sending to delete state before: ", state)
  // // state.quotes.filter(item => item.name !== action.name)

  person = action.person;
  for (var i = 0; i < state.contact.length; i++) {
    // console.log("delete name: ", state.contact[i].name)
    if (state.contact[i].name === person.name) {
      state.quotes.splice(i, 1);
      state.contact.splice(i, 1);
      // review = state.quotes
    }
  }

  // console.log("Sending to delete action after: ", action)
  // console.log("Sending to delete state: ", state)
  return state;
};
const handlequote = (state, action) => {
  //to update state using setState
  state.quotes = action.quotes;
  console.log("compare the update: ", action.quotes);
  console.log("compare the state: ", state.quotes);
  // return {
  //     quotes: action.quotes,
  //     quote: action.quote
  // }
  return state;
};
const Users = () => {
  let history = useHistory();
  const context = useContext(ApiContext);

  //response on fetch on let
  // let [stateQuote, setQuote] = useState(initialState);
  initialState.contact = context;
  let [stateAll] = useState(initialState);
  const [stateModal, setStateModal] = useState({
    show: false,
  });
  const [statePost, setStatePost] = useState({
    post: "",
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const editQuote = (e, quote) => {
    e.preventDefault();
    statePost.post = quote.message;
    console.log(quote.message);
    let showText = (
      <div id="modal-message">
        <h3>Under Construction!</h3>
        <p>Message: </p>
        <textarea id="modal-textarea" placeholder={quote.message} />
      </div>
    );
    setStatePost({ post: showText });
    setStateModal({ show: true });
  };
  //under construction
  const submitModal = () => {
    let message = "Under Construction, to be submitted for edits.";
    setStateModal({ show: false });
    GetSuccess(message);
    return false;
  };
  //under construction
  const hideModal = () => {
    let message = "Disregarded for edits.";
    setStateModal({ show: false });
    GetEditForm(message);
    return false;
  };
  //get deletequote
  const removeQuote = (e, person) => {
    e.preventDefault();
    console.log("quote to remove: ", person);
    // console.log(post)
    setStatePost({
      person: person,
    });
    state.post = person;
    dispatch({
      type: actionTypes.REMOVE_QUOTE,
      person: state.post,
    });

    let message =
      "This is getting deleted: " + JSON.stringify(person.name.first);
    GetSuccess(message);

    // history.push("/", stateAll)
  };
  // const GoBack = () => {
  //     return history.replace("/", { data: history.location.state.data })
  // }
  const UserItems = () => {
    let items = [];
    //save only names on localStorage for privacy if that was in real data
    context.map((item, index) => {
      if (items.length <= 25) {
        //console.log("for each:", index)
        items.push(item);

        localStorage.getItem("names");
        localStorage.setItem("names", JSON.stringify(items));
        //pass state in next component
        //console.log(items.length)
      } else if (index >= 26 || items.length >= 26) {
        delete localStorage[index];
        localStorage.setItem("names", JSON.stringify(items));
      }
      return localStorage;
      //to clear if to under developement
      //localStorage.clear();
    });
    let check = context.length > 0 && history.location.state === undefined;
    if (check || history.location.state.data.length >= 25) {
      //  console.log("context ", stateAll.contact.length)

      return stateAll.contact.map((item, index) => {
        // console.log("context ", item.name.title)
        // history.push("/", { data: stateQuote })
        item.message = stateAll.quotes[index];
        //just in case for history not updating
        return (
          <div key={index}>
            <div>
              <Modal
                show={stateModal.show}
                handleClose={hideModal}
                handleSubmit={submitModal}
              >
                {statePost.post}
              </Modal>
            </div>
            <Contact
              key={index.toString()}
              first={item.name.first}
              last={item.name.last}
              title={item.name.title}
              email={item.email}
              picture={item.picture.large}
              message={item.message}
              clicked={(e) => {
                removeQuote(e, item);
              }}
              edit={(e) => {
                editQuote(e, item);
              }}
            />
          </div>
        );
      });
    }
    if (history.location.state !== undefined) {
      return history.location.state.data.map((item, index) => {
        // console.log("filtered: ", item)
        item.message = stateAll.quotes[index];
        // history.push("/", { data: history.location.state.data })
        return (
          <div key={index}>
            {" "}
            <div>
              <Modal
                show={stateModal.show}
                handleClose={hideModal}
                handleSubmit={submitModal}
              >
                {statePost.post}
              </Modal>
            </div>
            <Contact
              key={index.toString()}
              first={item.name.first}
              last={item.name.last}
              title={item.name.title}
              email={item.email}
              picture={item.picture.large}
              message={item.message}
              clicked={(e) => {
                removeQuote(e, item);
              }}
              edit={(e) => {
                editQuote(e, item);
              }}
            />
          </div>
        );
      });
    }
  };
  if (context.length === 0) {
    // GetUsers()
    // console.log("History: ", history.location)
    return <Spinner />;
    // console.log("readData: ", stateData)
  }
  //check the filtered item to get on the
  if (context.length > 0 && history.location.pathname === "/") {
    return (
      <>
        {" "}
        <div>
          <Modal
            show={stateModal.show}
            handleClose={hideModal}
            handleSubmit={submitModal}
          >
            {stateAll.quote}
          </Modal>
        </div>
        <Message />
        <UserItems />
      </>
    );
  }
};

export default Users;
