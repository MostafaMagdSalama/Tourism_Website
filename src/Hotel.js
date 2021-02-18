import React, { Component } from 'react';
import HotelHeader from './components/hotel/hotelHeader';
import NavbarPanel from './components/landing-page/navbarPanel'; 
import img from './components/img/hotel.jpg';
import Objectives from './components/objectives/objectiveMainPage';
import FamilyRoom from './components/hotel/familyRoom';
import PRoom from './components/hotel/pRoom';
import Slider from './components/tour/tourMainPage'; 
import navbarPanel from './components/landing-page/navbarPanel';


export default class Hotel extends Component {
    render() {
    const title="Our Hotel";
        return (
            <>
              <HotelHeader img={img} title={title} isActiveFunction={this.props.isActiveFunction}/>
              <NavbarPanel isShow={this.props.isActive}>
                <a href="/">
                <ul>
                   <li><a href="/hotel">H</a></li>
                   <li><a href="/hotel">O</a></li>
                   <li><a href="/hotel">M</a></li>
                   <li><a href="/hotel">E</a></li>
                  
                </ul>
                </a>
             </NavbarPanel>
              <Objectives/>
              <FamilyRoom/>
              <PRoom />
              <Slider/>
            </>
        )
    }
}
