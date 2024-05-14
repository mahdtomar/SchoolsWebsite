import React from 'react'
import MainBtn from '../../miscellaneous/MainBtn'
import  './scss/cta.css'
const CTA = () => {
    return (
        <section className='homepage-cta'>
            <div className="container flex-vertical">
                <h2 className='heading-font l-space'>
                    Start Your Learning Journey Today
                </h2>
                <p className='l-space'>Embark on a journey of lifelong learning with Schools Website. Explore interactive courses, engage with expert instructors, and unlock your full potential. Join our vibrant community of learners today!</p>
                <MainBtn content={"Explore All Courses"} />
            </div>
        </section>
    )
}

export default CTA