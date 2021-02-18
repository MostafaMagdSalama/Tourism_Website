import React, { Component } from 'react';
import img from '../img/welcomePage.jpg';

export default class welcomeImage extends Component {
    render() {
        return (
           <div className="welcomeLeftSide">
               <img src={img} alt=""/>
           </div>
        )
    }
}
