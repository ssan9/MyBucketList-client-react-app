import React from "react";
import { connect } from "react-redux";
import "./footer.css";

export function Footer(props) {
  return (
		<footer className="footer">
		    <small>
		        &copy; 2017 Swati Ankit -{" "}
		        <a href="https://github.com/ssan9" target="_blank" rel="noopener noreferrer">
		         	"https://github.com/ssan9"
		        </a>
		    </small>
		</footer>

	)
}

export default connect()(Footer);	