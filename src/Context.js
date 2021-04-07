import React, { useState, useEffect } from "react";
import { getApi } from "./reducers/action/api";
import { useHistory } from "react-router-dom";
import { backupUsers } from './pages/middle/users/backup'
import { backup } from "./../src/pages/left/watch/backup";

export const ApiContext = React.createContext();

/*
 This is for Api context
 */
const Context = (props) => {
  //response on fetch on let
  const [stateData, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let history = useHistory();
  if (history.location.state === undefined) {
    history.push(window.location.pathname, {
      data: backupUsers,
      posts: backupUsers,
      inbox: [],
      videos: backup

    });
  }


  useEffect(() => {
    //to get the data to always load new data if context is updated
    history.push(window.location.pathname, {
      data: backupUsers,
      posts: backupUsers,
      inbox: [],
      videos: backup
    });
    //get users to read on data
    const fetchData = () => {
      getApi()
        .then((json) => {
          let obj = Object.values(json.results);
          setData(obj);
          setLoading(false);
          if (history.location.state.posts.length === 0 || history.location.state === undefined) {

            return history.push(window.location.pathname, {
              posts: backupUsers,
              data: backupUsers,
              inbox: [],
              videos: []
            });
          }
          else {
            return history.push(window.location.pathname, {
              posts: obj,
              data: obj,
              inbox: [],
              videos: []
            });
          }

        })
        .catch((err) => {
          console.error(err);
          setError(err);
        });


    }


    function doStartFetch() {
      if (loading) return "Loading..." && fetchData()
      if (error) return "Oops!"
    }

    const startingFetch = setInterval(doStartFetch, 500);
    // aborting request when cleaning
    return () => {
      clearInterval(startingFetch);
    };
  }, [loading, error, history]);

  // return provider
  return (
    <ApiContext.Provider value={stateData}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default Context;
