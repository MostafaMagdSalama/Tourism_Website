import React, { Component } from 'react';
import foodicn from '../img/icons/001-breakfast.svg';
import planetEarth from '../img/icons/002-planet-earth.svg';
import airplan  from '../img/icons/003-airplane.svg';
import beach  from '../img/icons/004-beach.svg';
import mountains  from '../img/icons/005-mountains.svg';
import hotairballoon  from '../img/icons/006-hot-air-balloon.svg';

export default class objectivesElement extends Component {
    render() {
        return (
           <div className="objectivesElement">
               <div className="container">
                   <div>
                       <img src={foodicn} alt="" className="objectIcon"/>
                       <p className="title">Good Foods</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                   <div>
                       <img src={planetEarth} alt="" className="objectIcon"/>
                       <p className="title">Travel Anywhere</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                   <div>
                       <img src={airplan} alt="" className="objectIcon"/>
                       <p className="title">Airplane</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                   <div>
                       <img src={beach} alt="" className="objectIcon"/>
                       <p className="title">Beach Resort</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                   <div>
                       <img src={mountains} alt="" className="objectIcon"/>
                       <p className="title">Mountain Climbing</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                   <div>
                       <img src={hotairballoon} alt="" className="objectIcon"/>
                       <p className="title">Hot Air Balloon</p>
                       <p className="desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
               </div>
           </div>
        )
    }
}
