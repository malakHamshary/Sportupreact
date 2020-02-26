import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Action from './Action'
import Footer from './Footer'



function LandingPage() {
  return (
   <div>
     <Navigation />
     <Header 
     title="Just Show Up & Play"
     subtitle="no reservations, no club memberships, no empty courts"
     />
     <About 
      title="Ball Everywhere"
      subtitle="Team UP helps you find the hottest courts, invite players, organize & join pick-up's around the city."
     />
     <Action />
     <Footer />
   </div>
  )
}

export default LandingPage;
