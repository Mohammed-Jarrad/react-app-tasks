import React, { useContext } from "react";
import { LettersContext } from "../../Context/LettersProvider";
import "./TypeLetter.scss";

const TypeLetter = () => {
	const { handleWriteLetter } = useContext(LettersContext);

	return (
		<div className="type-letter">
			<form onSubmit={handleWriteLetter}>
				<input type="text" placeholder="Type a Letter..." />
				<button>Send</button>
			</form>
		</div>
	);
};

export default TypeLetter;
