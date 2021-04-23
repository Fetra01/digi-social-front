import React from 'react';
import { NavLink } from 'react-router-dom';
//import Logout from './Log/Logout';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo">
                            <img src="./img/r2digi.png" alt="icon"/>
                            <h3>Digisocial</h3>
                        </div>
                    </NavLink>
                </div>
                {/*<ul>
                    <li></li>
                    <li className="welcome">
                        <NavLink exact to="/profil">
                            <h5>Bienvenu</h5>
                        </NavLink>
                    </li>
                    <Logout />
                </ul> */}

                <ul>
                    <li></li>
                    <li>
                        <NavLink exact to="/">
                            <img src="./img/icons/login.svg" alt="login"/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;