import React from 'react'
import { Link} from 'react-router-dom';

function About(props){
  return (
   <div>
    <div class="container-fluid about bg-dark" id="about">
  <h2 class="display-4">{props.title}</h2>
    <hr />
  <h5>{props.subtitle}</h5>
    <hr />

    <h1>ABOUT</h1>
    <h3> Team UP helps you find the hottest courts, invite players, organize & join pick-up's around the city.</h3>
    <Link class="btn btn-light btn-xl js-scroll-trigger" to="/signup">GET STARTED!</Link>
    

    </div>
   </div>
  )
}





export default About