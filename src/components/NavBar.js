import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router";
import './NavBar.css'

const NavBar = () => {
    let navigate=useNavigate()

    return (
        <Navbar bg="dark" className="navbar">
            <Navbar.Brand onClick={()=>navigate('/')}>
                <img className='navbar--img' src='https://www.mirf.ru/wp-content/uploads/2016/05/FuturePast.jpg'/>
            </Navbar.Brand>
        </Navbar>
    );
};

export default NavBar;