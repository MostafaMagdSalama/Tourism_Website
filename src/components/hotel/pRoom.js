import React, { Component } from "react";
import img from '../img/p-room.jpg'; 

export default class pRoom extends Component {
  render() {
    return (
      <div className="pRoom">
        <div className="left">
          <p className="title">Presidential Room</p>
          <p className="desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. <br/> <br/>A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p>
          <button className="pRoomBtn">Learn More</button>
        </div>
        <div className="right">
            <img src={img} alt=""/>
        </div>
      </div>
    );
  }
}
