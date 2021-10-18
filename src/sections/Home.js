import React from 'react';
import {TwitchPlayer, TwitchChat} from 'react-twitch-embed';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Home = () => {

    return (
       <section id="home">
     <div className="home d-flex flex-column justify-content-center align-items-center">
     <h2>D-Pads 'N Dice</h2>
    
    <div className="twitch-container">
        <TwitchPlayer
        channel="dpadsndice"
        id="twitch-player-embed"
        theme="dark"
        height="100%"
        width="100%"
        />   
    </div>
    <div className="home-container">
    
<div className="twitter-embed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="dpadsndice"
  theme="light"
  autoHeight="true"
  options={{border: "1rem solid black"}}
/> 
</div>

</div>
</div>
</section>
    )
}
export default Home