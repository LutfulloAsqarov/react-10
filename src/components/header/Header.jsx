import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import headerImg from "../../assets/images/header.png";
import "./Header.scss";
import Sidebar from "../sidebar/Sidebar";

const Header = ({ title }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <header id="header">
            <div className="header container">
                <div className="header__top">
                    <div className="header__bar" onClick={toggleSidebar}>
                        <RxHamburgerMenu />
                    </div>
                    <div className="header__top__right">
                        <p>Jones Ferdinand</p>
                        <img src={headerImg} alt="" />
                    </div>
                </div>
                <div className="header__bottom">
                    <h2 className="header__bottom__title">{title}</h2>
                    <div className="header__btns">
                        <button className="header__dots">•••</button>
                        <button className="header__add">Add</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
