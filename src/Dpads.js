import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js'
import {TwitchPlayer, TwitchChat, TwitchClip, TwitchEmbed} from 'react-twitch-embed'

function Dpads() {
  return (
    <div>
     <Navigation />
     <section id="stream">
     <div className="stream d-flex flex-column justify-content-center align-items-center" id="home">
     <h1>D-Pads 'N Dice</h1>
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
</section>

<section id="about">
<div className="about">
  <p>Chris skyWalker was born on Tatooine and had an early interest in restoring junk droids to help him locate whomp rats to shoot. </p>
    <p>He actually invented videogaming, but no one believes him. However, the kind being that he is, he still shares his gaming experiences for the world to enjoy. </p>
    <p>Follow D-PADS 'N DICE for fun insight to new games, old games, board games, video games, and everything inbetween.
    </p>
  </div>
</section>
<section id="follow">
<h3>Follow D-PADS 'N DICE!</h3>
  <div className="button-box">
  <a href="https://twitter.com/DpadsnDice?ref_src=twsrc%5Etfw" target="_blank"><img id="twitter-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo-2012-present.jpg" alt="twitter logo"></img></a>
  <a href="https://www.instagram.com/dpadsndice/" target="_blank">
   <img id="insta-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" alt="instagram logo"></img>
</a>
 
<a href="https://www.youtube.com/channel/UCzU6xcVBrtoBk0g26K9vH5w?sub_confirmation=1" target="_blank">
<div><img id="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="youtube logo"></img></div></a>
  </div>
</section>
                
            </div>

     
    
  );
}

export default Dpads;
