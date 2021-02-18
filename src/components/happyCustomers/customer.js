import React, { Component } from 'react'

export default class customer extends Component {
    render() {
        return (
            <div className="customer">
                <img src={this.props.img} alt="" className="customerImg"/>
                <p className="comment">{this.props.comment}</p>
                <p className="name">{this.props.name}</p>
            </div>
        )
    }
}
