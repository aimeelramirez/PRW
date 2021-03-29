import { FiCoffee } from "react-icons/fi";
// import Ad from './../../components/ad/ad'
import Search from "./../middle/search/search";
// import Message from '../../view/navigation/message/Posts';
import Portal from "./../../reducers/portal";
// import MainButton from './../../components/button/mainButton';

// import React, { useState, useEffect } from 'react';
// import { FiLogIn, FiLogOut } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <section>
        <h1>
          <strong>Logo</strong>
          <FiCoffee />
        </h1>
        <h2>Coffee.</h2>
      </section>
      <article id="header-icons">
        <Portal />
      </article>
      <Search />
    </header>
  );
};

export default Header;
