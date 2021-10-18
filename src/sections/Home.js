import React from 'react';
import {TwitchPlayer, TwitchChat} from 'react-twitch-embed';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

const Home = () => {

    return (
       <section>
     <div className="stream d-flex flex-column justify-content-center align-items-center" id="home">
     <h2>D-Pads 'N Dice</h2>
     <div className="home-container">
       <div className="twitch-container">
    <div className="twitch-embed">
    <TwitchPlayer
        channel="dpadsndice"
        id="twitch-player-embed"
        theme="dark"
        height="100%"
        width="100%"
        />   
</div>
<div className="twitch-chat">
  <TwitchChat 
  channel="dpadsndice"
  id="twitch-chat-embed"
  theme="dark"
  height="100%"
  width="100%"
  />
  </div>
</div>
<div className="twitter-embed">
<TwitterTimelineEmbed
  sourceType="profile"
  screenName="dpadsndice"
  theme="dark"
  autoHeight="true"
  transparent
/> 
</div>
</div>
</div>
</section>
    )
}
export default Home