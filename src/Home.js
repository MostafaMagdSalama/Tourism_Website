import React, { Component } from 'react';
import WelcomePage from './components/welcome/welcomPage';
import ObjectiveMainPage from './components/objectives/objectiveMainPage';
import TourMainPage from './components/tour/tourMainPage';
import HappyCustomers from './components/happyCustomers/happyCustomers';
import TopDestination from './components/topDestinations/topDestinationsMainPage';
import LandingPage from './components/landing-page/landingPage';
// test
import ObjectivesHeading from './components/objectives/objectiveHeading';

export default class Home extends Component {

    render() {
        return (
            <>
        
   <LandingPage isActive={this.props.isActive} isActiveFunction={this.props.isActiveFunction} />
     <WelcomePage/>
      <ObjectiveMainPage >
       <ObjectivesHeading/>
          </ObjectiveMainPage>
      <TourMainPage/>
      <HappyCustomers/>
      <TopDestination/> 
            </>
        )
    }
}
