import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { IoCube } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

const Sidebar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        if (confirm("Aru you sure?")) {
            localStorage.clear();
            navigate("/");
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__title">
                <IoCube className="sidebar__title__icon" />
                <h2>Dashboard</h2>
            </div>
            <ul className="sidebar__collection">
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"products"}>
                        <FaChartPie />
                        <span>Products</span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"users"}>
                        <FaTicket />
                        <span> Users</span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"posts"}>
                        <FaLightbulb />
                        <span>Posts</span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <Link className={"sidebar__link"} to={""}>
                        <FaLightbulb />
                        <span>Contacts</span>
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link className={"sidebar__link"} to={""}>
                        <FaLightbulb />
                        <span>Agents</span>
                    </Link>
                </li>
            </ul>
            <button className="sidebar__btn" onClick={handleLogout}>
                <RxExit />
                Log out
            </button>
        </div>
    );
};

export default Sidebar;
