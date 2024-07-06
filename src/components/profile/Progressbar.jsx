import React, { useEffect, useRef } from 'react'

const Progressbar = ({ title, progress }) => {
    const span = useRef(null)
    useEffect(() => {
        span.current.style.width = `${progress}%`
        console.log(span.current)
    }, [progress])

    return (
        <div className='progress-bar flex-vertical'>
            <span>{title}</span>
            <div><span ref={span} progress-value={progress}></span></div>
        </div>
    )
}

export default Progressbar