import React from 'react'
import MainBtn from '../../miscellaneous/MainBtn'

const GradeCard = ({ title, list }) => {
    return (
        <div className='grade-card'>
            <h3 className='heading-font l-space'>{title}</h3>
            <ul className='l-space'>
                {list.map((ele, i) => {
                    return <li key={i} className='s-space'>{ele}</li>
                })}
            </ul>
            <MainBtn content={"See More"} />
        </div>
    )
}

export default GradeCard