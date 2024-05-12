import React from 'react'
import MainBtn from '../../miscellaneous/MainBtn'
import './scss/HomePageHeader.css'
const HomePageHeader = () => {
    return (
        <header className='homepage-header'>
            <div className="container">
                <h1 className='l-space heading-font'>This is The Big And Awesome Header!</h1>
                <p className='m-space'>this is a small descripntion to get you hooked up even more and apply fo our service!</p>
                <MainBtn classes={"heading-font"} content={"Apply Now"} />
            </div>
        </header>
    )
}

export default HomePageHeader