import Footer from "../components/Footer.js";
import "./Courses.css";

function Courses (){
    return (
    <>
    <div className="grad">
    <div className="card">
       <div className="t-card">
            <h4>Free Courses</h4>
            <ul>
                <li>Lecture</li>
                <li>Lecture</li>
                <li>Lecture</li>
                <li>Lecture</li>
            </ul>
        </div>
        <div className="t-card">
            <h4>Paid Courses</h4>
            <ul>
                <li>Lecture</li>
                <li>Lecture</li>
                <li>Lecture</li>
                <li>Lecture</li>
            </ul>
        </div>
    </div>
    </div>
       <Footer />
    </>
    );
}

    
        
export default Courses;