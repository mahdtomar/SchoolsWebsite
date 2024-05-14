import React from 'react'
import Navbar from '../components/homepage/Navbar/Navbar'
import HomePageHeader from '../components/homepage/Hompage header/HomePageHeader'
import OurViews from '../components/homepage/our-view/OurViews'
import HowItWorks from '../components/homepage/how it works/HowItWorks'
import HomepageFeatures from '../components/homepage/features/HomepageFeatures'
import HomepageGrades from '../components/homepage/Grades/HomepageGrades'
import CTA from '../components/homepage/HomepageCTA.jsx/CTA'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HomePageHeader />
            <main>
                <OurViews />
                <HowItWorks />
                <HomepageFeatures />
                <HomepageGrades />
                <CTA />
            </main>
        </div>
    )
}

export default HomePage