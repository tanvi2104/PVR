import React from 'react';
import './Course.css';

function Course(){
    return (
    <>
        <div className="gradient">
            <h2 className="course-title">Explore Our Courses</h2>
            <div className="align-course">
            <div className="c4">
                <h5 className="c-t">Stock Market Overview</h5>
                <p className="course-text"> Get stock market ready
                 with our beginner-friendly fundamental course</p>
            </div>

            <div className="c3">
                <h5 className="c-t">Fundamental Analysis</h5>
                <p className="course-text">We have some exclusive ebooks and videos just for you to
                 get started on your financial journey! Click below to access them</p>
            </div>

            <div className="c2">
                <h5 className="c-t">Technical Analysis</h5>
                <p className="course-text">We have some exclusive ebooks and videos just for you to
                 get started on your financial journey! Click below to access them</p>
            </div>

            <div className="c1">
                <h5 className="c-t">Futures and Options</h5>
                <p className="course-text">We have some exclusive ebooks and videos just for you to
                 get started on your financial journey! Click below to access them</p>
            </div>
            </div>
         </div>
    </>
    );
}

export default Course;