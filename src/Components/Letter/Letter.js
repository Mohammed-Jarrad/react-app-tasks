import React from "react";
import "./Letter.scss";

const Letter = ({ content, isRight }) => {
	return (
		<div className={`letter ${isRight ? "right" : ""}`}>
			<p>{content}</p>
		</div>
	);
};

export default Letter;
