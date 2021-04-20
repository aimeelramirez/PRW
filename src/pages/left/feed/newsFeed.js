import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../../components/spinner/spinner";
import News from "../../../components/news/news";
import { ApiContext } from "../../../Context";
import { motion, useViewportScroll } from "framer-motion"


/*
 This is for NewsFeed that shows list of data unedited
 */
const PostList = () => {

  const history = useHistory();
  const context = useContext(ApiContext);
  const { scrollYProgress } = useViewportScroll()
  console.log(scrollYProgress)
  const UserItems = () => {
    let items = [];

    // //console.log("hello ", stateData)
    //save only names on localStorage for privacy if that was in real data
    context.map((item, index) => {
      if (items.length <= 25) {
        ////console.log("for each:", index)
        items.push(item);

        localStorage.getItem("feed");
        localStorage.setItem("feed", JSON.stringify(items));
        //pass state in next component
        ////console.log(items.length)
      } else if (index >= 26 || items.length >= 26) {
        delete localStorage[index];
        localStorage.setItem("feed", JSON.stringify(items));
      }
      return localStorage;
      //to clear if to under developement
      //localStorage.clear();
    });
    if (history.location.state !== undefined) {

      return history.location.state.data.map((item, index) => {
        // //console.log("filtered: ", item)
        return (
          <News
            key={index.toString()}
            title={item.name.title}
            first={item.name.first}
            last={item.name.last}
            email={item.email}
            picture={item.picture.large}
          />
        );
      });
    } else {

      return context.map((item, index) => {
        //get the new route
        history.push("/NewsFeed", { data: context });
        //just in case for history not updating
        //  //console.log("context ", item)
        return (
          <motion.path
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ pathLength: scrollYProgress }}
          >
            <News
              key={index.toString()}
              title={item.name.title}
              first={item.name.first}
              last={item.name.last}
              email={item.email}
              picture={item.picture.large}
            />
          </motion.path>
        );
      });
    }
  };
  if (context.length === 0) {

    return <Spinner />;
  }
  //check the filtered item to get on the
  if (context.length > 0 && history.location.pathname === "/NewsFeed") {
    return (
      <UserItems />)
  }
};

export default PostList;
