import React from 'react'
import Header from '../../components/Header/Header'
import GamesList from '../../components/Main/GameList/GameList'
import SlideShow from '../../components/SlideShow/SlideShow'
import SlideShow2 from '../../components/SlideShow2/SlideShow2'
import "./home.css"
const Home = () => {
  return (
    <>
    <Header />
    <SlideShow />
    <p className='ads'> 500,000+ games</p>
    <SlideShow2 />
    <GamesList />
    </>
  )
}

export default Home