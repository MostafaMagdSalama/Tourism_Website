import React, { Component } from 'react'
// import ObjectiveHeading from './objectiveHeading';
import ObjectivesElement from './objectivesElement';

export default class objectiveMainPage extends Component {
    render() {
      console.log(this.props.children)
        return (
            <div className="objectiveContainer">
                {/* <ObjectiveHeading/> */}
                {this.props.children} 
                <ObjectivesElement/>
            </div>
        )
    }
}
