import React, { useState, createContext } from 'react';

export const QuestionDetailsContext = createContext();

export const QuestionDetailsProvider = (props) => {
	const [question, setQuestion] = useState(null);

	return (
		<QuestionDetailsContext.Provider
			value={{selectedQuestionState: [question, setQuestion]	}}
		>
			{props.children}
		</QuestionDetailsContext.Provider>
	);
};