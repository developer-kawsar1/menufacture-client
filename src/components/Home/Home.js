import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import Banner from './Banner';
import Contact from './Contact';
import NewsLetter from './NewsLetter';
import Products from './Products';
import Reviews from './Reviews';
import Summery from './Summery';

const Home = () => {
    return (
        <>
        <Banner/> 
        <Products/> 
        <Summery/> 
        <Reviews/> 
        <NewsLetter/> 
        
        <Contact/>
            
        </>
    );
};

export default Home;