import React from 'react'

const LearningStep = ({ icon, title, paragraph }) => {
    return (
        <figure className='learning-step flex-vertical'>
            <img src={icon} alt="" className='' />
            <span className='heading-font'>{title}</span>
            <p>{paragraph}</p>
        </figure>
    )
}

export default LearningStep