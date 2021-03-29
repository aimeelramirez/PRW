import React, { useState, useEffect } from "react";
import { getApi } from "./reducers/action/api";
import { useHistory } from "react-router-dom";
export const ApiContext = React.createContext();

const Context = (props) => {
  //response on fetch on let
  const [stateData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let history = useHistory();

  useEffect(() => {
    //get users to read on data
    const fetchData = () => {
      getApi()
        .then((json) => {
          let obj = Object.values(json.results);
          //  console.log(obj)
          setData(obj);
          // console.log(json)
          // console.log(history)
          //to get path to location
          setLoading(false);

          return history.replace(history.location.pathname, { data: obj });
        })
        .catch((err) => {
          console.error(err);
          setError(err);
        });
    };
    function doStartFetch() {
      if (loading) return "Loading..." && fetchData();
      if (error) return "Oops!";
    }

    const startingFetch = setInterval(doStartFetch, 500);
    // aborting request when cleaning
    return () => {
      clearInterval(startingFetch);
    };
  }, [loading, error, history]);

  return (
    <ApiContext.Provider value={stateData}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default Context;
