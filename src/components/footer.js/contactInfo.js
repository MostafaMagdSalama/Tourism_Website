import React, { Component } from 'react'

export default class contactInfo extends Component {
    render() {
        return (
           <div className="contactInfo">
               <p className="title">Contact Info</p>
               <p className="supTitle">address</p>
               <p className="address">98 West 21th Street, Suite 721 New York NY 10016</p>
               <p className="supTitle">Phone</p>
               <p className="phone">(+1) 435 3533</p>
               <p className="supTitle">Email</p>
               <p className="email">info@yourdomain.com</p>
           </div>
        )
    }
}
