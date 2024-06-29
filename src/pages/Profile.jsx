import React from 'react'
import Navbar from '../components/homepage/Navbar/Navbar'
import { Link } from 'react-router-dom'
import UserInfoRow from '../components/profile/UserInfoRow'
import LightBlueBtn from '../components/profile/LightBlueBtn'
import Progressbar from '../components/profile/Progressbar'
import ClassroomBoxIcon from '../components/profile/ClassroomBoxIcon'

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className="profile-grid-container container">
                <div className="summerized-card">
                    <figure className='flex-vertical'>
                        {/* <img src="" alt="" /> */}
                        <div className='img'></div>
                        <figcaption>
                            <span className='user-name'></span>
                            <p className='user-field-of-study'></p>
                        </figcaption>
                    </figure>
                    <ul>
                        <LightBlueBtn value={"subjects"} />
                        <LightBlueBtn value={"classrooms"} />
                        <LightBlueBtn value={"teachers"} />
                        <LightBlueBtn value={"parents"} />
                    </ul>
                </div>
                <div className="analyisis">
                    <div className='personal-info'>
                        <div className="title"><p>Personal Info</p><img src="" alt="" /></div>
                        <div className="user-data">
                            <UserInfoRow value={"Omar Mahdy"} title={"Full Name"} />
                            <UserInfoRow value={"omarmahdyq@gmail.com"} title={"Email"} />
                            <UserInfoRow value={"+201029949333"} title={"Phone Number"} />
                            <UserInfoRow value={"12-11-2003"} title={"Birth Date"} />
                        </div>
                    </div>
                    <div className='current-progress'>
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
            </div>
        </>)
}

export default Profile