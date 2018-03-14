import React from "react";
import { connect } from "react-redux";

import "./stories.css";
import "../reusable-components/float-grid.css";


export function Stories(props) {
	return (
		<div className="stories">
			<div className="story one">
				<p className="user-story">"Whenever I'd see any homeless person on the streets, I'd feel like helping him out, but I wasn't sure if I give money to him he would utilize it in a good manner and not waste it on drugs. So, one day I was passing by a homeless guy and he was asking for some change to buy food. I felt it would be better to buy him food to be sure he doesn't misuse the money. There were lots of vendors nearby and I asked him what he would like to have. He wanted to have 2 hamburgers with fries. I got them for him and he immediately started hogging them down. I could see he was very hungry. It felt so good that I could help someone in need. That day I decided that I would do such things more often."</p>
				<h4 className="user-info">John, 34-New York</h4>
			</div>
		</div>
	);
}








export default connect()(Stories);