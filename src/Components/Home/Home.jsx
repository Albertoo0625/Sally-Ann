import React from 'react'
import HomeFooter from './HomeFooter'
import Nav from '../Nav/Nav'
import HomeHero from './HomeHero'
import HomeAbout from './HomeCategories'


const Home = () => {
  return (
  <React.Fragment>
    <Nav/>
    <HomeHero/>
    <HomeFooter/>
    <HomeAbout/>
  </React.Fragment>
  )
}

export default Home