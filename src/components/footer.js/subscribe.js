import React, { Component } from 'react'

export default class subscribe extends Component {
    render() {
        return (
          <div className="subscribe">
              <p className="title">Subscribe</p>
              <p className="newsLetter">Sign up for our newsletter</p>
              <input type="text" placeholder="Your Email..." className="newsLetterInput"/><i className="fa fa-paper-plane"></i>
          </div>
        )
    }
}
