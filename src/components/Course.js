import React from 'react';
import './Course.css';
import tom from "../images/tom.jpg"

function Course(){
    return (
    <>
        <div className="grad">
            <div className="explore-course">
            <h2>Explore Our Courses</h2>
            </div>
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
            <div className="q2">
            <div className="qoute2">
            <img className="qouteimg2" src={tom} alt="w"/>
            <h2 className="qoutetext2">"Life is like a stock market. Some days you're up.
             Some days you're down. And some days you feel like something the bull left behind"</h2>
            <h4 className="name2">-Tom Wilson</h4>
         </div>
         </div>
         </div>
    </>
    );
}

export default Course;