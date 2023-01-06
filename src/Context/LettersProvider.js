import React, { createContext, useState } from "react";

export const LettersContext = createContext();

const LettersProvider = ({ children }) => {
	const [letters, setLetters] = useState([]);
	const [rightAppear, setRightAppear] = useState(true);

	const handleWriteLetter = e => {
		e.preventDefault();
		const text = e.target[0].value;
		if (text) {
			setLetters([
				...letters,
				{
					msg: text,
					isRight: rightAppear,
				},
			]);
			setRightAppear(!rightAppear);
			e.target[0].value = ""; // to reset the input feild
		}
	};

	return (
		<LettersContext.Provider
			value={{
				letters,
				setLetters,
				handleWriteLetter,
			}}
		>
			{children}
		</LettersContext.Provider>
	);
};

export default LettersProvider;
