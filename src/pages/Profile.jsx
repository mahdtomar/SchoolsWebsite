import React from 'react'
import Navbar from '../components/homepage/Navbar/Navbar'
import UserInfoRow from '../components/profile/UserInfoRow'
import LightBlueBtn from '../components/profile/LightBlueBtn'
import Progressbar from '../components/profile/Progressbar'
import ClassroomBoxIcon from '../components/profile/ClassroomBoxIcon'
import './scss/profile.css'
import tempPFP from './../assets/images/WhatsApp Image 2024-07-06 at 10.10.56 PM.jpeg'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="profile-grid-container container">
                <div className="summerized-card">
                    <figure className='flex-vertical'>
                        <div className='img'><img src={tempPFP} alt="user pfp" /></div>
                        <figcaption>
                            <span className='user-name'>Omar Mahdy</span>
                            <p className='user-field-of-study'>Accounting</p>
                        </figcaption>
                    </figure>
                    <ul>
                        <LightBlueBtn value={"subjects"} />
                        <LightBlueBtn value={"classrooms"} />
                        <LightBlueBtn value={"teachers"} />
                        <LightBlueBtn value={"parents"} />
                    </ul>
                </div>
                <div className='personal-info'>
                    <Link to={"/"} className="title"><p>Personal Info</p><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 16H27" stroke="#e9f3ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 7L27 16L18 25" stroke="#e9f3ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </Link>
                    <div className="user-data">
                        <UserInfoRow value={"Omar Mahdy"} title={"Full Name"} />
                        <UserInfoRow value={"omarmahdyq@gmail.com"} title={"Email"} />
                        <UserInfoRow value={"+201029949333"} title={"Phone Number"} />
                        <UserInfoRow value={"12-11-2003"} title={"Birth Date"} />
                    </div>
                </div>
                <div className='current-progress'>
                    <Link to={"/"} className='title'><p>Current Progress</p><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 16H27" stroke="#e9f3ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18 7L27 16L18 25" stroke="#e9f3ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></Link>
                    <Progressbar title={"Attendance"} progress={55} />
                    <Progressbar title={"Exams"} progress={80} />
                    <LightBlueBtn value={"More Details"} />
                </div>
                <div className='upcoming-classes'>
                    <span className="title">up coming classrooms</span>
                    <div className="classrooms-slider">
                        <ClassroomBoxIcon img={""} />
                        <ClassroomBoxIcon img={""} />
                        <ClassroomBoxIcon img={""} />
                    </div>
                </div>
            </div>
        </>)
}

export default Profile