import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h2 className="section-title">This Week</h2>
            <div className="week-section">
                <div className="card">Upcoming Deadlines</div>
                <div className="card">Calendar</div>
            </div>

            <h2 className="section-title">Current Courses</h2>
            <div className="courses-grid">
                <div className="course-card"></div>
                <div className="course-card"></div>
                <div className="course-card"></div>
                <div className="course-card add-course">+</div>
            </div>
        </div>
    );
};

export default Home;
