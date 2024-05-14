import React from "react";
import FeatureSquare from "./FeatureSquare";
import MainBtn from "../../miscellaneous/MainBtn";
import './scss/homepagefeatures.css'
const HomepageFeatures = () => {
    return (
        <section className="homepage-features">
            <div className="container flex2">
                <div className="offer">
                    <h2 className="heading-font l-space">Elevate Your Learning Experience</h2>
                    <p className="m-space">
                        Explore a world of innovative learning with [Your Platform Name].
                        Our platform is designed to empower students, teachers, and parents
                        with cutting-edge features that enhance the educational experience.
                        From immersive virtual classrooms to interactive learning materials
                        and seamless progress tracking, we provide a comprehensive solution
                        for modern education.
                    </p>
                    <MainBtn content={"Discover More"} />
                </div>
                <div className="features">
                    <FeatureSquare content={"live Sessions"} />
                    <FeatureSquare content={"Easy Assess"} />
                    <FeatureSquare content={"Parents Insight"} />
                    <FeatureSquare content={"Progress Tracking"} />
                </div>
            </div>
        </section>
    );
};

export default HomepageFeatures;
