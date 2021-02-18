import React, { Component } from "react";
import QuickLink from './quickLink';
import Support from './support';
import ContactInfo from './contactInfo';
import Subscribe from './subscribe';   

export default class footerMainPage extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="contentContainer">
            <QuickLink/>
            <Support/>
            <ContactInfo/>
            <Subscribe/>
        </div>
      </div>
    );
  }
}
