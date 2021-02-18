import React, { Component } from 'react'
import Navbar from './navbar';
import LandingPagePanel from './LandingPagePanel';
import NavbarPanel from './navbarPanel';

export default class landingPage extends Component {
    constructor(props){
        super(props)
        this.state={panelShow:false}

    }
   panelShowFunction=(isShow)=>{
        this.setState({panelShow:isShow});

    } 
    render() {
      console.log(this.props)
        return (
            
            // this is landing <page></page>
            <div className="landingPage">
                <div className="filter">
                    <NavbarPanel isShow={this.props.isActive}>
                <a href="/hotel">
                                <ul>
                                <li><a href="/hotel">H</a></li>
                                <li><a href="/hotel">O</a></li>
                                <li><a href="/hotel">T</a></li>
                                <li><a href="/hotel">E</a></li>
                                <li><a href="/hotel">L</a></li>
                                </ul>
                                </a>
                    </NavbarPanel>
                    <Navbar panelShowFunction={this.props.isActiveFunction}/>
                   <LandingPagePanel/>
                   
                    
                    </div>
            </div>
        )
    }
}
