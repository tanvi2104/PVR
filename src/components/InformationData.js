import { Component } from 'react';
import img from "../images/d.jpeg";
import "../routes/Home.css";

class InformationData extends Component{
	render(){
		return(
			<div className={this.props.className}>
				<div className="des-text"> 
					<h2>{this.props.heading}</h2>
					<p>{this.props.text}</p>
				</div>

				<div className="desimage">
					<img alt="img" src={img}/>
				</div>
			</div>
		);
	}
}

export default InformationData;