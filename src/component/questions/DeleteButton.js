import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { QuestionDetailsContext } from 'context/QuestionDetailsContext';
import { UserContext } from 'context/UserContext';
import { Button } from 'style/MyStyle';

export default function DeleteButton() {
	const history = useHistory();
	const { rolesState } = useContext(UserContext);
	const roles = rolesState[0];

	const { deleteQuestion } = useContext(QuestionDetailsContext);

	return roles.includes('ROLE_ADMIN') ? (
		<React.Fragment>
			<Button onClick={() => deleteQuestion(history)}> Delete </Button>
		</React.Fragment>
	) : (
		<React.Fragment></React.Fragment>
	);
}
