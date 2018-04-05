import React from "react";
import { connect } from "react-redux";

import "./stories.css";
import "../reusable-components/float-grid.css";


export class Stories extends React.Component {
	constructor(props) {		//hypothetical
		super(props);
		this.state = {
			currentStory: 0,
		}
	}
	componentDidMount() {	//live
		setInterval(() => {
			if(this.state.currentStory===0) {
				this.setState({currentStory:1})
			}else{this.setState({currentStory:0})}
		}, 2000
	)}
	render() {
		const currentStory = this.state.currentStory;
		return (
			<div className="stories">
				{currentStory===0 && <div className="story one">
					<p className="user-story">"Whenever I'd see any homeless person on the streets, I'd feel like helping him out, but I wasn't sure if I give money to him he would utilize it in a good manner and not waste it on drugs. So, one day I was passing by a homeless guy and he was asking for some change to buy food. I felt it would be better to buy him food to be sure he doesn't misuse the money. There were lots of vendors nearby and I asked him what he would like to have. He wanted to have 2 hamburgers with fries. I got them for him and he immediately started hogging them down. I could see he was very hungry. It felt so good that I could help someone in need. That day I decided that I would do such things more often."</p>
					<h4 className="user-info">John, 34-New York</h4>
				</div>}
				{currentStory===1 && <div className="story one">
					<p className="user-story">"I have always dreamed of learning salsa with my partner but kept procrastinating it for some or the other reason. But after creating the Bucket list I became so motivated that within a week's time of creating this list, I got us enrolled for salsa classes. I am in seventh heaven now as I'm immensely enjoying these classes."</p>
					<h4 className="user-info">Rose, 48-California</h4>
				</div>}
			</div>
		);
	}
}








export default connect()(Stories);