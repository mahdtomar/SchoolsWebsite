import React from 'react'
import LearningStep from './LearningStep'
import './scss/howItWorks.css'
// icons
import chart from './../../../assets/icons/chart.svg'
import userID from './../../../assets/icons/userid.svg'
import chat from './../../../assets/icons/chatbubbles.svg'
import cursorclick from './../../../assets/icons/cursorClick.svg'
const HowItWorks = () => {
    return (
        <section className='how-it-works'>
            <div className="container">
                <header className='xl-space'>
                    <h2 className='m-space'>How School’s Website Works?</h2>
                    <p>its fairly easy and straight forward with these 4 steps</p>
                </header>
                <div className="features flex2">
                    <LearningStep icon={userID} title='Register an Email' paragraph='you will first need to have an email for you to join us' />
                    <LearningStep icon={cursorclick} title='Course Selection' paragraph='Then you will need to choose the Grade you are and the Subject You want To Study' />
                    <LearningStep icon={chat} title='Assignments' paragraph='Your Teachers will give you Assignments to test your understanding of the subjects' />
                    <LearningStep icon={chart} title='Track Your Progress' paragraph='From the Classrooms you attend and the Assignments you finish you will be able to track your progress' />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks