import React, { useState } from "react";
import UserImage from "../UserImage/UserImage";
import "./SideBar.scss";

const SideBar = () => {
	const [showSideBar, setShowSideBar] = useState(true);
	return (
		<div className="side-bar">
			<button
				onClick={() => {
					setShowSideBar(!showSideBar);
				}}
			>
				&times;
			</button>
			<div className={`wrapper ${showSideBar ? "" : "hide"}`}>
				<div className="info">
					<p>Name: Mohammed Jarrad</p>
					<p>Age: 24</p>
				</div>
				<UserImage size={150} />
			</div>
		</div>
	);
};

export default SideBar;
