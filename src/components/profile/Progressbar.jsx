import React from 'react'

const Progressbar = ({ title, progress }) => {
    return (
        <div>
            <span>{title}</span>
            <div><span progress-value={progress}></span></div>
        </div>
    )
}

export default Progressbar