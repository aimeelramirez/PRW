import React, { useState, useEffect, createContext } from "react";
import { getApi } from "./reducers/action/api";
import { useHistory } from "react-router-dom";
import { backupUsers } from './pages/middle/users/backup'
import { backup } from "./../src/pages/left/watch/backup";

export const ApiContext = createContext();

/*
 This is for Api context
 */
const Context = (props) => {
  //response on fetch on let
  const [stateData, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let history = useHistory();


  useEffect(() => {
    if (history.location.state === undefined) {
      history.push(window.location.pathname, {
        data: backupUsers,
        posts: backupUsers,
        inbox: [],
        videos: backup

      });
    }

    // //to get the data to always load new data if context is updated
    // history.push(window.location.pathname, {
    //   data: backupUsers,
    //   posts: backupUsers,
    //   inbox: [],
    //   videos: backup
    // });
    //get users to read on data
    const fetchData = () => {
      getApi()
        .then((json) => {
          let obj = Object.values(json.results);
          setData(obj);
          setLoading(false);
          if (history.location.state !== undefined) {
            return history.push(window.location.pathname, {
              posts: obj,
              data: obj,
              inbox: [],
              videos: []
            });
          } else {
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
  console.log(stateData)
  return (

    <ApiContext.Provider value={stateData}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default Context;
