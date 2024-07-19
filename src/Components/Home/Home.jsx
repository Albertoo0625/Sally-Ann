import React from 'react'
import HomeFooter from './HomeFooter'
import Nav from '../Nav/Nav'
import HomeHero from './HomeHero'
import HomeCategories from './HomeCategories'
import HomeTestimanials from './HomeTestimanials'
import HomeHeader from './HomeHeader'
import HomeAbout from './HomeAbout'


const Home = () => {
  return (
  <React.Fragment>
    <Nav/>
    <HomeHeader/>
    <HomeHero/>
    <HomeFooter/>
    <HomeCategories/>
    <HomeTestimanials/>
    <HomeAbout/>
  </React.Fragment>
  )
}

export default Home