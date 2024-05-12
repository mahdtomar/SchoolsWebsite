import React from 'react'

const MainBtn = ({ content, classes }) => {

    return (
        <button className={`main-btn ${classes}`}>
            {content}
        </button>
    )
}

export default MainBtn