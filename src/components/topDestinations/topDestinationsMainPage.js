import React, { Component } from 'react';
import Header from './topDestinationsHeader';
import Card from './destinationCard';
import mountainClimbing from '../img/cards/mountain.jpg';
import spa from '../img/cards/spa.jpg';
import hotelRoom from '../img/cards/hotel-room.jpg';
import wine from '../img/cards/wine.jpg';

export default class topDestinationsMainPage extends Component {
    render() {
        return (
           <div className="topDestinationsMainPage">
                    <Header/>
                    <div className="cardsContainer">
                      <Card img={wine} title="Foods & Wines" />
                      <Card img={spa} title="Resort & Spa" />
                      <Card img={hotelRoom} title="Hotel Rooms" />
                      <Card img={mountainClimbing} title="Mountain Climbing" />
                    </div>
           </div>
        )
    }
}
