import React from 'react'
import { Link } from 'react-router-dom'

const ClassroomBoxIcon = ({ link = "/", img }) => {
    return (
        <Link to={link}>
            <img src={img} alt="" />
        </Link>
    )
}

export default ClassroomBoxIcon