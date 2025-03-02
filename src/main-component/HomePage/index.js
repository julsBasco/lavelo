import React from 'react';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Story from '../../components/story';
import Welcome from '../../components/welcome-area';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Gift from '../../components/gift';
import MessageWall from '../../components/MessageWall';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const Homepage = () => {
    return (
        <div>
            <Navbar />
            <SimpleSlider />
            <Saveday />
            <Welcome />
            <Couple />
            <Story />
            <Location />
            <Gallery />
            <MessageWall />
            <Gift />
            <Footer />
            <Scrollbar />
        </div>
    )
}

export default Homepage;