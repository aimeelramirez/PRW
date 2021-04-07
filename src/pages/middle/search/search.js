import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GetError, GetEditForm } from "./../../../reducers/action/notification";
// import { ApiContext } from "./../../../Context";

const Search = () => {
  let history = useHistory();
  //console.log(history)
  // let context = useContext(ApiContext);
  const json = localStorage.getItem("names");
  const savedPost = JSON.parse(json);
  const jsonInbox = localStorage.getItem("inbox");
  const savedInbox = JSON.parse(jsonInbox);
  let [stateHistory, setStateHistory] = useState(savedPost);
  let [stateHistoryInbox, setStateHistoryInbox] = useState(savedInbox);

  let [state, setState] = useState({
    data: [],
    inbox: [],
    oldInbox: []
  });

  const onSearchClick = (e) => {
    e.preventDefault();

    let newList = [];

    if (e.target[0].value !== "") {
      debugger
      const json1 = localStorage.getItem("names");
      const savedPost1 = JSON.parse(json1);

      newList = savedPost1.filter((item) => {
        const name = Object.values(item.name);
        //console.log(name)
        // get name and split spaces and join query
        const check = name.join("").toLowerCase();
        let filter = e.target[0].value.toLowerCase();
        const removeItem = filter.split(" ").join("");
        return check.includes(removeItem);
      });

      if (newList.length === 0) {
        let message = "Please, try again.";
        //console.log(message);
        GetError(message);
        return false;

      } else {
        setStateHistory(stateHistory);
        setState({
          data: newList,
        });
        state.data = newList;

        e.target[0].value = "";

        //console.log("replacing state");

        let message = "If to delete or modify, please go back for changes!";
        GetEditForm(message);

        return history.replace("/search/users", {
          data: newList,
        });

      }
    } else {
      let getItems = localStorage.getItem("names");
      setState({ data: JSON.parse(getItems) });
      //console.log("pushing update");
      let message = "Please, fill input and try again.";
      //console.log(message);
      GetError(message);
      history.replace("/search/users", {
        data: JSON.parse(getItems),
      });

      return true;
    }
  };
  const onSearchClickInbox = (e) => {
    e.preventDefault();

    let newList = [];
    debugger
    if (e.target[0].value !== "") {
      const jsonInbox1 = localStorage.getItem("inbox");
      const savedInbox1 = JSON.parse(jsonInbox1);
      newList = savedInbox1.filter((item) => {
        const name = item.name.title + " " + item.name.first + " " + item.name.last
        // get name and split spaces and join query
        const check = name.toLowerCase();
        let filter = e.target[0].value.toLowerCase();
        const removeItem = filter.split(" ").join("");
        return check.includes(removeItem);
      });
      if (newList.length === 0) {
        let message = "Please, try again.";
        //console.log(message);
        GetError(message);
        return false;
      } else {
        setStateHistoryInbox(savedInbox1);
        setState({
          inbox: newList,
          oldInbox: stateHistoryInbox
        });
        state.data = newList;
        e.target[0].value = "";
        //console.log("replacing state");
        let message = "If to delete or modify, please go back for changes!";
        GetEditForm(message);
        history.push("/search/inbox", {
          inbox: newList,
          oldInbox: stateHistoryInbox

        });
      }
    } else {
      let getItems = localStorage.getItem("inbox");
      setState({ inbox: JSON.parse(getItems) });
      //console.log("pushing update");
      let message = "Please, fill input and try again.";
      //console.log(message);
      GetError(message);
      history.push("/search/inbox", {
        inbox: JSON.parse(getItems),
      });

      return true;

    }
  };

  //for each click handle the path
  const handleClick = (e) => {
    e.preventDefault();
    //console.log(e);

    if (window.location.pathname === "/Messages") {
      onSearchClickInbox(e);
    }
    if (window.location.pathname === "/Home" || window.location.pathname === "/NewsFeed") {
      onSearchClick(e);
    }
  };

  const SearchBarInput = () => {
    return (
      <div className="Search">
        <div id="List-Search">
          <div className="list-search">
            <form onSubmit={handleClick}>
              <p>
                <label>Search:</label>
              </p>
              <p id="searchInput">
                <input type="text" name="search" placeholder="search names." />
                <button type="submit">
                  <strong>Search</strong>
                  <FiSearch />
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  };

  if (state.inbox !== undefined && state.inbox.length > 0) {
    return (
      <>
        <SearchBarInput />
      </>
    );
  }
  if (state.data.length > 0) {
    return (
      <>
        <SearchBarInput />
      </>
    );
  }
  return (
    <>
      <SearchBarInput />
    </>
  );
};

export default Search;
