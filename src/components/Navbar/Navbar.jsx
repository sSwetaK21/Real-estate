import React from 'react'
import { Link } from "react-router-dom";
import { FaEnvelopeOpen } from "react-icons/fa";
import Button from '@mui/material/Button';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import "./Navbar.css";


function Navbar() {



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
                    <div className="n-list">
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Link to='/' activeClass="active" spy={true} smooth={true}>
                                    Rent
                                </Link>

                            </li>
                            <li>
                                <Link to="/Buy" spy={true} smooth={true}>
                                    Buy
                                </Link>

                            </li>
                            <li>
                                <Link to="/Sell" spy={true} smooth={true}>
                                    Sell
                                </Link>

                            </li>
                            <li>
                                <DropdownButton id="dropdown-basic-button" title="Manage Property">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"><Link to="/Favs" spy={true} smooth={true}>
                                        Favorites
                                    </Link></Dropdown.Item>
                                </DropdownButton>
                            </li>
                            <li>
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