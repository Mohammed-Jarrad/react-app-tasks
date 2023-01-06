import React, { useContext } from "react";
import { LettersContext } from "../../Context/LettersProvider";
import Letter from "../Letter/Letter";
import "./LettersBoard.scss";

const LettersBoard = () => {
	const { letters } = useContext(LettersContext);

	return (
		<div className="letters-board">
			{[...letters].length ? (
				[...letters].map((letter, i) => {
					return (
						<Letter key={i} content={letter.msg} isRight={letter.isRight} />
					);
				})
			) : (
				<h1 className="no-letters-msg">Please Start Writing a Letter</h1>
			)}
		</div>
	);
};

export default LettersBoard;
