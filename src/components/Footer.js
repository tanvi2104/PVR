import "./Footer.css";
import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom/client';

const Footer = () => {
	const [course, setCourse] = useState('0');

	const handleChange = (event) => {
		setCourse(event.target.value)
	}

	return(
		<div className="footer">
		<div className="top">
			<h1>Free Webinar</h1>	
			<div className="social">
				<a href="/">
					<i className="fa-brands fa-facebook-square"></i>
				</a>
				<a href="/">
					<i className="fa-brands fa-instagram-square"></i>
				</a>
				<a href="/">
					<i className="fa-brands fa-twitter-square"></i>
				</a>
			</div>
		</div>
	<div className="bottom">
	<form className="form">
      <label >Name</label>
      <input 
      type="text"
      placeholder="name"
      />
      <label >Phone No</label>
      <input 
      type="number"
      placeholder="number"
      />
      <label >Course Option</label>
      <select value={course} onChange={handleChange}>
      	<option style={{display:'none'}} selected="selected" value=""> </option>
      	<option value="Stock">Stock Market Overview</option>
      	<option value="Analysis">Fundamental Analysis</option>
      	<option value="Technical">Technical Analysis</option>
      </select>
      <div className="sub">
      <button className="subb">Send</button>
      </div>
    </form>
    <div className="cour">
    <p className="pp">Our Courses</p>
   	<ul className="core">
   	<li >
        <Link>Stock Market Overview</Link>
    </li>
    <li >
        <Link>Fundamental Analysis</Link>
    </li>
    <li >
        <Link>Technical Analysis</Link>
    </li>
    </ul>
    </div>

    <div className="about">
    <p>At PVR, we pride ourselves on 
			offering comprehensive and accessible financial 
			education, particularly in stock market analysis, 
			investment strategies, and diverse financial 
			instruments. Our seasoned experts bring decades of
			 experience, delivering hands-on workshops, 
			 seminars, and personalized mentoring sessions.
	</p>
    </div>

	</div>
	<div className='company'>
        © 2023 Copyright: MTP Solutions
    </div>
	</div>

	);
}


export default Footer;

