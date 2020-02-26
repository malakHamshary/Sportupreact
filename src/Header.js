import React from 'react'

function Header(props){
  return (
    <div class="jumbotron jumbotron-fluid" id="home">
  <div class="container-fluid">
  <h1 class="display-4">{props.title}</h1>
  <p class="lead display-5">{props.subtitle}</p>
    <a class="btn btn-dark btn-xl js-scroll-trigger" href="#about">FIND OUT MORE</a>

  </div>
</div>
  )
}


export default Header