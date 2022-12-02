import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaEnvelopeOpen } from "react-icons/fa";
import Button from '@mui/material/Button';
import { FaBars } from "react-icons/fa";

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import "./Navbar.css";


function Navbar() {

    // const [navbar, setNavbar] = useState(false)

    return (
        <div className='header'>
            <div className='nav-wrapper' id='navBar'>
                {/* Left */}
                <div className='nav-left'>
                    <div className='nav-brand'>
                        <div className='brand-icon'>
                            <FaEnvelopeOpen />
                        </div>
                        <div className='brand-name'>
                            Estatery
                        </div>
                    </div>
                    {/* <button  onClick={() => {
                        setNavbar(!navbar)
                    }}
                        className={navbar ? "nav_show toggle " : "nav_links toggle"}                    >
                        <FaBars />
                    </button> */}
                    <div className="n-list nav_links  nav_show">
                        <ul style={{ listStyleType: "none" }}>
                            <li className='nav-li'>
                                <Link to='/' activeClass="active" spy={true} smooth={true} className="nav-links">
                                    Rent
                                </Link>

                            </li>
                            <li className='nav-li'>
                                <Link to="/Buy" spy={true} smooth={true} className="nav-links">
                                    Buy
                                </Link>

                            </li>
                            <li className='nav-li'>
                                <Link to="/Sell" spy={true} smooth={true} className="nav-links">
                                    Sell
                                </Link>

                            </li>
                            <li className='nav-li'>
                                <Link to="/Favs" spy={true} smooth={true} className="nav-links">
                                    Favorites
                                </Link>
                            </li>
                            <li >
                                <DropdownButton id="dropdown-basic-button" title="Manage Property">
                                    <Dropdown.Item href="#/action-1">
                                        Actions
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Another action</Dropdown.Item>

                                </DropdownButton>
                            </li>
                            <li >
                                <DropdownButton id="dropdown-basic-button" title="Resources" >
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='nav-btn'>
                        <Button variant="outlined" sx={{ m: 1 }}>Login</Button>
                        <Button className='btnpurple' >Signup</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar