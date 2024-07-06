import React from 'react'
import { Link } from 'react-router-dom'
import rightArrow from '../../assets/icons/ArrowRight.svg'
const LightBlueBtn = ({ value, link = '/' }) => {
    return (
        <Link to={link} className='flex2 main-btn'>
            <p>{value}</p>
            <img src={rightArrow} alt="right arrow icon" />
        </Link>
    )
}

export default LightBlueBtn