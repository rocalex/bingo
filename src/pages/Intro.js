import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import EarnInterestBody from './EarnInterest';
import SideBar from '../components/SideBar';

const Intro = () => {
    return (
        // <Router>
        //     <Header />
        //     <Routes>
        //       <Route exact path='/' element={<Home />} />
        //       <Route exact path='/earn_interest' element={<EarnInterestBody />} />
        //       {/* <Route exact path='/connect_wallet' element={<ConnectWallet/>} /> */}
        //     </Routes>
        //     <Footer />
        //   </Router>

        <Router>
            <SideBar />
            <Header />
            <Routes>
                {/* <Header /> */}
                <Route exact path='/' element={<Home />} />
                <Route exact path='/earn_interest' element={<EarnInterestBody />} />
                {/* <Route exact path='/connect_wallet' element={<ConnectWallet/>} /> */}
                {/* <Footer /> */}
            </Routes>
            <Footer />
        </Router>
    )
}

export default Intro;