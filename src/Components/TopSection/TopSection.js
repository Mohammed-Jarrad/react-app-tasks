import React from "react";
import UserImage from "../UserImage/UserImage";
import "./TopSection.scss";

const TopSection = () => {
	return (
		<div className="top-section">
			<p>
				Hi <strong>Guest!</strong>
			</p>
			<UserImage size={70} />
		</div>
	);
};

export default TopSection;
