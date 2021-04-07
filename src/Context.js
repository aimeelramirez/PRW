import React, { useState, useEffect, createContext, useContext } from "react";
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
  let context = useContext(ApiContext)


  useEffect(() => {
    // if (history.location.state === undefined) {
    //   history.push("/", {
    //     data: backupUsers,
    //     posts: backupUsers,
    //     inbox: [],
    //     videos: backup

    //   });
    // }

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
          if (history.location.state !== undefined && context === null) {
            console.log("hi", context)
            return history.push(window.location.pathname, {
              posts: obj,
              data: backupUsers,
              inbox: [],
              videos: []
            });
          }
          if (history.location.state !== undefined && context !== null) {
            history.push(window.location.pathname, {
              data: backupUsers,
              posts: context,
              inbox: [],
              videos: backup

            });
          }
          // else {
          //   return history.push(window.location.pathname, {
          //     posts: obj,
          //     data: obj,
          //     inbox: [],
          //     videos: []
          //   });
          // }

          // setInterval(() => {
          //   if (context === null) {
          //     console.log("update")
          //     history.push(window.location.pathname, {
          //       data: backupUsers,
          //       posts: context,
          //       inbox: [],
          //       videos: backup

          //     });
          //   }
          // }, 2000)

        })
        .catch((err) => {
          console.error(err);
          setError(err);
        });


    }


    function doStartFetch() {
      if (loading) return "Loading..." && fetchData()
      if (error) return "Oops!" && fetchData()
    }

    const startingFetch = setInterval(doStartFetch, 500);
    // aborting request when cleaning
    return () => {
      clearInterval(startingFetch);

    };
  }, [loading, error, history, context]);

  // return provider
  console.log(stateData)
  return (

    <ApiContext.Provider value={stateData}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default Context;
