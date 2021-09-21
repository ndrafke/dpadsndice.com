import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MountEffect from './components/MountEffect.js';
import Navigation from './components/Navigation.js';
import {TwitchPlayer, TwitchChat} from 'react-twitch-embed';
import {TwitterTimelineEmbed} from 'react-twitter-embed';


function Dpads() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      let timer = setTimeout(() => setIsLoading(false), 1500);
       return() => {
           clearTimeout(timer);
       }

  }, []); 

  return (
    isLoading ? <MountEffect /> :
    <div>
     <Navigation />
     <section id="stream">
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

<section id="about">
<div className="about">
  <div className="about-text">
  <p>D-PADS 'N DICE was created by Chris Walker in 2019. This Chicagoland-based channel has recently been streaming Sea of Thieves, Phasmaphobia, and Back 4 Blood.</p>
    <p>Chris has a deep knowledge and passion for the history of videogaming and occasionally streams old-school games for Flashback Friday events. </p>
    <p>Follow D-PADS 'N DICE for fun insight to new games, old games, board games, video games, and everything inbetween.
    </p>
    </div>
  </div>
  
</section>
<section id="follow">
  <h3 style={{textAlign: "center"}}>New stream schedule coming soon!</h3>
<div className="d-flex flex-column align-items-center justify-content-between">
  <h3>Follow D-PADS 'N DICE!</h3>
  <div className="button-box">
  <a href="https://twitter.com/DpadsnDice?ref_src=twsrc%5Etfw" target="_blank"><img id="twitter-logo" src="https://www.vhv.rs/dpng/d/211-2110922_transparent-background-twitter-logo-hd-png-download.png" alt="twitter logo"></img></a>
  <a href="https://www.instagram.com/dpadsndice/" target="_blank">
   <img id="insta-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" alt="instagram logo"></img>
</a>
 
<a href="https://www.youtube.com/channel/UCzU6xcVBrtoBk0g26K9vH5w?sub_confirmation=1" target="_blank">
<div><img id="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="youtube logo"></img></div></a>
<a href="https://www.tiktok.com/@dpadsndice" target="_blank">
<div><img id="tiktok-logo" src="https://www.pngitem.com/pimgs/m/488-4889569_tiktok-tik-tok-logo-png-transparent-png.png" alt="tiktok logo"></img></div></a>
  </div>
  </div>
</section>


                
            </div>

     
    
  );
}

export default Dpads;
