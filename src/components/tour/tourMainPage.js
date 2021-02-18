import React, { Component } from 'react'
import TourHeading from './tourHeading';
import Slider from './slider';

export default class tourMainPage extends Component {
    render() {
        return (
            <div className="tourMainPage">
                <TourHeading/>
                <Slider/>
              
               
            </div>

        )
    }
}
