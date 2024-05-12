import React from 'react'
import './scss/OurViews.css'
import onlineLecture from './../../../assets/images/Online Teaching.svg'
const OurViews = () => {
    return (
        <section className='our-views'>
            <div className="container">
                <figure className='flex2'>
                    <figcaption>
                        <h2 className='heading-font l-space'>Empowering Education With Enriching Futures</h2>
                        <p className='s-space'>At [Your Website Name], we believe in revolutionizing education by providing a dynamic online platform that connects students, teachers, and parents in a seamless learning ecosystem.</p>
                        <p>Our innovative approach integrates classrooms, subjects, and personalized progress tracking, empowering students to excel and parents to stay informed.</p>
                    </figcaption>
                    <img src={onlineLecture} alt="" />
                </figure>
            </div>
        </section>
    )
}

export default OurViews