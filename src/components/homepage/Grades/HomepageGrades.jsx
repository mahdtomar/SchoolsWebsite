import React from 'react'
import GradeCard from './GradeCard'
import './scss/homepagegrades.css'
const HomepageGrades = () => {
    return (
        <section className='homepage-grades'>
            <div className="container flex-vertical">
                <h2 className='heading-font xl-space'>Easy Access To All The Subjects You Need For All Grades And More.</h2>
                <div className="grades flex2 ">
                    <GradeCard title={'Elementary School'} list={['Reading and understanding', 'writing', 'relationship skills', 'math skills', 'languege']} />
                    < GradeCard title={'Middle School'} list={["Reading and understanding",
                        "writing",
                        "relationship skills ",
                        "math skills",
                        "languege",]} />
                    <GradeCard title={'High School'} list={["Reading and understanding",
                        "writing",
                        "relationship skills ",
                        "math skills",
                        "languege",]} />
                </div>
            </div>
        </section>
    )
}

export default HomepageGrades