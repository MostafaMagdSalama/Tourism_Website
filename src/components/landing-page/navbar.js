import React, { Component } from 'react'

export default class navbar extends Component {
    constructor(props){
        super(props);
        this.state={isActive:false};

    }
    isActiveFunction=()=>{
        this.props.panelShowFunction(!this.state.isActive);
         this.setState({isActive:!this.state.isActive});
        
       
    }
    render() {
        return (
           
            <nav>
            {/* start of logo */}
            <p className="logo">Greece</p>
           {/* end og logo */}
           {/* strat of hamborger icon */}
           <div onClick={this.isActiveFunction} className={`hamContainer ${ this.state.isActive ? "active":" "}`}>
               <div className="ham"></div>
               <div className="ham"></div>
               <div className="ham"></div>
           </div>
         
           </nav>
           
        )
    }
}
