// import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";
import Button from "../../../components/button/Button";
import Information from './../../../components/information/information'
const ShowFilter = () => {

  let history = useHistory();

  const FilteredItems = () => {

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
