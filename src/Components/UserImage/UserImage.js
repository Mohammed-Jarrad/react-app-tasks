import React from "react";

const UserImage = ({ size }) => {
	const style = {
		width: `${size}px`,
		height: `${size}px`,
		objectFit: "cover",
		borderRadius: "50%",
	};

	return <img style={style} src="/mohammed_photo1.jpg" alt="user-figure" />;
};

export default UserImage;
