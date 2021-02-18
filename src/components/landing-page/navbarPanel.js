import React, { Component } from 'react'

export default class navbarPanel extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={`navbarPanel ${this.props.isShow? "desp" : ""}`}>
                {/* <a href="/hotel">
                <ul>
                   <li><a href="/hotel">H</a></li>
                   <li><a href="/hotel">O</a></li>
                   <li><a href="/hotel">T</a></li>
                   <li><a href="/hotel">E</a></li>
                   <li><a href="/hotel">L</a></li>
                </ul>
                </a> */}
                {this.props.children}
            </div>
        )
    }
}
