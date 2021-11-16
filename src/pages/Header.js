import React from 'react';

const Header = () => {

    return (
        <div class="head_part">
			<div class="row head_menu">
				<div class="col-md-4 head_logo">
					<img src="images/bingo_logo.png" width="250" height="90"/>
				</div>	
				<div class="col-md-8 d-flex justify-content-center">
					
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
				</div>	
			</div>
			<div class="row head_home d-flex justify-content-center align-items-center">
				<h1>Home</h1>
			</div>

		</div>
    );
}

export default Header;
