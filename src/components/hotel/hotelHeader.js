import React, { Component } from 'react';
import Navbar from '../landing-page/navbar';


export default class hotelHeaher extends Component {
    render() {
       const style={
           backgroundImage:"url("+this.props.img+")"
       } 
      
        return (
           <div className="hotelHeader" style={style}>
               <div className="hotelHeaderContent">

      
               
            <Navbar panelShowFunction={this.props.isActiveFunction}/>
            <p className="Title">{this.props.title}</p>
            </div>

           </div>
        )
    }
}
