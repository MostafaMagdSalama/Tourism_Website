import React, { Component } from "react";
import WelcomeImage from "./welcomeImage";
import WelcomeContent from "./welcomeContent";

export default class welcomPage extends Component {
  render() {
    return (
      <div className="welcomeContainer">
        <WelcomeImage />
        <WelcomeContent />  
      </div>
    );
  }
}
