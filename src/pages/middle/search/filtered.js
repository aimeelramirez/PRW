// import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";
import Button from "../../../components/button/Button";
import Contact from "./../../../components/contact/contact";
import Post from './../../../components/post/Post'
// import Button from './../../../components/button/Button'
// import { ApiContext } from './../../../Context'
// import { GetEditForm } from './../../../reducers/action/notification'
import Information from './../../../components/information/information'
// const Flitered = (e) => {
const ShowFilter = (props) => {
  let path = `${window.location.pathname}filter`;

  let history = useHistory();
  const json = localStorage.getItem("names");
  const savedPost = JSON.parse(json);
  const FilteredItems = () => {
    //const context = useContext(ApiContext)
    //get history
    // console.log(history)
    console.log("filtered : ", history.location.state)
    if (history.location.state.data.length > 0) {
      return history.location.state.data.map((item, index) => {
        let date = new Date(item.registered.date)

        return (
          <Information
            key={index.toString()}
            title={item.name.title}
            first={item.name.first}
            last={item.name.last}
            username={item.login.username}
            email={item.email}
            picture={item.picture.large}
            date={date.toDateString()}
            phone={item.phone}
          />
        );
      });
    }
  }
  const GoBack = () => {
    return history.goBack();
  };

  return (
    <>
      <Button onClick={GoBack}>Go Back</Button>
      <FilteredItems />
    </>
  );
};

export default ShowFilter;
