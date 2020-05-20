import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';
import Question from 'context/Question';
import { QuestionsContext } from 'context/QuestionsContext';

export const QuestionDetailsContext = createContext();

export const QuestionDetailsProvider = (props) => {
	const { QUESTIONS_BASE_URL } = useContext(QuestionsContext);
	const [question, setQuestion] = useState(null);

	const getQuestion = (id) => {
		const url = QUESTIONS_BASE_URL + `/${id}`;
		axios.get(url, { withCredentials: true }).then((resp) => {
			setQuestion(new Question(resp.data));
		});
	};

	const validate = (history) => {
		axios({
			method: 'put',
			url: QUESTIONS_BASE_URL + `/${question.id}`,
			withCredentials: true,
		}).then(
			(response) => {
				if (response.status === 200) {
					alert('Question validated successfully! :)');
					history.push('/questions');
				}
			},
			(error) => {
				console.log(error);
				alert('Something went wrong. Please try again later.');
			}
		);
	};



	return (
		<QuestionDetailsContext.Provider
			value={{
				validate,
				getQuestion,
				selectedQuestionState: [question, setQuestion],
			}}
		>
			{props.children}
		</QuestionDetailsContext.Provider>
	);
};
