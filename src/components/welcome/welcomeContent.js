import React, { Component } from "react";

export default class welcomeContent extends Component {
  render() {
    return (
      <div className="welcomeRightSide">
        <div className="rightSideContent">
         
            <p className="welcomeTitle">Welcome To Our Website</p>
            <p className="welcomeDesc">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
              <br /> <br />A small river named Duden flows by their place and
              supplies it with the necessary regelialia.
            </p>
            <div className="playIcon">
              <i className="fa fa-play"></i>
              <span>Watch The Video</span>
            </div>
     
        </div>
      </div>
    );
  }
}
