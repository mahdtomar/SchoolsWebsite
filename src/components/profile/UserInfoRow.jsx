import React from 'react'

const UserInfoRow = ({ title, value }) => {
    return (
        <div>
            <span>{title}</span>
            <p>{value}</p>
        </div>
    )
}

export default UserInfoRow