import React from "react";
import {NavLink} from "react-router-dom";

export class NavBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink exact className="nav-link" to='/users' activeClassName='active'>Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/groups' activeClassName='active'>Groups</NavLink>
                </li>
            </ul>
        )
    }
}