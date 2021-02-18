import React, { Component } from 'react'

export default class quickLink extends Component {
    render() {
        return (
            <div className="quickLink">
                <p className="title">Quick Link</p>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Rooms</a></li>
                </ul>
            </div>
        )
    }
}
