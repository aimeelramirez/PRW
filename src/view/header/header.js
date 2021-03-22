

// import { FiUser, FiSettings } from "react-icons/fi";
// import Ad from './../../components/ad/ad'
import SearchBar from './search'
// import Message from '../../view/navigation/message/Posts';
import Portal from '../../reducers/Portal';
// import MainButton from './../../components/button/mainButton';

// import React, { useState, useEffect } from 'react';
// import { FiLogIn, FiLogOut } from "react-icons/fi";



const Header = () => {
    return (
        <div>
            <div id="header-icons">
                <Portal />
            </div>
            <SearchBar />
        </div>
    )
}

export default Header;