import React, { useState } from 'react';
import './NavBar.css';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavBarData } from './NavBarData';

const NavBar = () => {
    const [sidebar, setSidebar] = useState(true);
    const setSidebar = () => setSidebar(!sidebar)

    return (
        <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="earn_interest">Earn Interest</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="connect_wallet">Connect Wallet</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="earn_free_coin">Earn Free Coins</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="lottery">Lottery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="play">Play</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="how_it_works">How it works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="faqs">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact_us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar