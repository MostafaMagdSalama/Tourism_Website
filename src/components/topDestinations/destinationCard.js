import React, { Component } from 'react'

export default class destinationCard extends Component {
    render() {
        return (
           <div className="destinationCard">
               <img src={this.props.img} alt="" className="cardImg"/>
               <p className="cardTitle">{this.props.title}</p>
<div className="rating">
               <div className="stars">
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star"></i>
               <i className="fas fa-star-half-alt"></i>
               </div>

               <p className="reviews">3,239 reviews</p>
               </div>
           </div>
        )
    }
}
