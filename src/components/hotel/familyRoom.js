import React, { Component } from "react";
import family_room from '../img/family-room.jpg';

export default class familyRoom extends Component {
  render() {
    return (
      <div className="familyRoom">
        <div className="left">
          <img src={family_room} alt="" />
        </div>
        <div className="right">
          <p className="title">Family Room</p>
          <p className="desc">
            Far far away, behind the word mountains, far    from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.<br/><br/> A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p>
          <button className="learnMoreBtn">Learn More</button>
        </div>
      </div>
    );
  }
}
