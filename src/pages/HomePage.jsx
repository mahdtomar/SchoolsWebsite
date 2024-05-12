import React from 'react'
import Navbar from '../components/homepage/Navbar/Navbar'
import HomePageHeader from '../components/homepage/Hompage header/HomePageHeader'
import OurViews from '../components/homepage/our-view/OurViews'
import HowItWorks from '../components/homepage/how it works/HowItWorks'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HomePageHeader />
            <main>
                <OurViews />
                <HowItWorks />
            </main>
        </div>
    )
}

export default HomePage