import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import {
	Table,
	TableRow,
	QuestionTableHead,
	QuestionListContainer,
	QuestionsTd,
	TableContainer,
	QuestionsTr,
	H3,
	QuestionListTdNavLink,
} from 'style/MyStyle';

import { UserContext } from 'context/UserContext';

export default function QuestionsList() {
	const [questions, setQuestions] = useState([]);
	const { rolesState } = useContext(UserContext);
	const roles = rolesState[0];

	useEffect(() => {
		axios
			.get('http://localhost:8080/questions', { withCredentials: true })
			.then((resp) => setQuestions(resp.data));
	}, []);

	const delete_question = (id) => {
		setQuestions([...questions.filter((question) => question.id !== id)]);
	};

	return (
		<QuestionListContainer>
			<H3>All questions</H3>
			<TableContainer>
				<Table>
					<thead>
						<TableRow>
							<QuestionTableHead>Id</QuestionTableHead>
							<QuestionTableHead>Question</QuestionTableHead>
							<QuestionTableHead>Category</QuestionTableHead>
							<QuestionTableHead>Type</QuestionTableHead>
							<QuestionTableHead>Status</QuestionTableHead>
						</TableRow>
					</thead>
					<tbody>
						{questions.map((question, index) => (
							<QuestionsTr key={index}>
								<QuestionsTd>{question.id}</QuestionsTd>
								<QuestionListTdNavLink to={`/questions/${question.id}`}>
									<QuestionsTd>{question.question}</QuestionsTd>
								</QuestionListTdNavLink>
								<QuestionsTd>{question.category.name}</QuestionsTd>
								<QuestionsTd>{question.type}</QuestionsTd>
								<QuestionsTd>
									{question.validated === true ? 'Validated' : 'Not validated'}
								</QuestionsTd>
								{roles.includes('ROLE_ADMIN') === true && (
									<QuestionsTd onClick={() => delete_question(question.id)}>
										X
									</QuestionsTd>
								)}
							</QuestionsTr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</QuestionListContainer>
	);
}
