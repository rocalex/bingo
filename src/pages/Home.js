import React from 'react'

const Home = () => {
  return (
    <div class="body-part">

      <div class="connect_btn d-flex justify-content-center">CONNECT WALLET</div>
      <div class="row mt-5">
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <img class="body_part_photo1" src="images/1.jpg" />
          <h2 class="red_letter mt-5">Play</h2>
          <p class="mt-3">Takes user to free arcade game section, need BINGO tokens to play games. Games have weekly tournaments and high score payouts. See <code>https://www.crazygames.com/</code></p>
        </div>
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <img class="body_part_photo1" src="images/earn_free_coins.jpg" />
          <h2 class="red_letter mt-5">Earn Free Coins</h2>
          <p class="mt-3">Takes User to Survey Page where users complete surveys to earn free coins</p>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <img class="body_part_photo2" src="images/lottery.jpg" />
        </div>
        <div class="col-lg-6 d-flex flex-column align-items-center">
          <h2 class="red_letter mt-5">Lottery</h2>
          <p class="mt-3">Weekly lottery with no guaranteed winner, pot grows until winner is selected. Users stake coins for tickets, users do not have to choose individual numbers. See</p>
          <code>https://app.yieldly.finance/prize-games</code>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-4 d-flex flex-column align-items-center">
          <img class="body_part_photo1" src="images/earn_interest.jpg" />
          <h2 class="red_letter mt-5">Earn Interest</h2>
          <p class="mt-3">Users can stake coins to earn interest. Users get bonus interest if they enable keep the change and extra bonus interest if they enable reoccurring buys</p>
        </div>
        <div class="col-lg-4 d-flex flex-column align-items-center">
          <img class="body_part_photo1" src="images/casino.png" />
          <h2 class="red_letter mt-5">Casino</h2>
          <p class="mt-3">User can play casino games/tournaments with other users and bots with BINGO coins to win BINGO coins. Same page as PLAY, different section</p>
        </div>
        <div class="col-lg-4 d-flex flex-column align-items-center">
          <img class="body_part_photo1" src="images/cross_chain_swapping.jpg" />
          <h2 class="red_letter mt-5">Cross Chain Swapping</h2>
          <p class="mt-3">Users can swap BINGO coins for other coins</p>
        </div>
      </div>
    </div>
  )
}

export default Home