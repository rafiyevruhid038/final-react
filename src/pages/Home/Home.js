import React from 'react'
import GamesList from '../../components/Main/GameList/GameList'
import SlideShow from '../../components/SlideShow/SlideShow'
import SlideShow2 from '../../components/SlideShow2/SlideShow2'
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import { FaAnglesDown } from "react-icons/fa6";
import "./home.css"
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <>
    <div className='courusel'>
    <SlideShow />
    <ScrollLink to='gamelist' smooth={true} duration={1000}><p className='ads'><FaAnglesDown /> Enjoy 500,000+ games <FaAnglesDown /></p></ScrollLink>
    <SlideShow2 />
    </div>
    <Element name="gamelist">
    <GamesList />
    </Element>
    <Footer />
    </>
  )
}

export default Home