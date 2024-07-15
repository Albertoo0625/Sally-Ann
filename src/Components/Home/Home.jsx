import React from 'react'
import HomeFooter from './HomeFooter'
import Nav from '../Nav/Nav'
import HomeHero from './HomeHero'


const Home = () => {
  return (
  <React.Fragment>
    <Nav/>
    <HomeHero/>
    <HomeFooter/>
  </React.Fragment>
  )
}

export default Home