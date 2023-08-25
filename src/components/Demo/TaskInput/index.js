import styled from "styled-components";
import { GoPaperAirplane } from "react-icons/go";

const InputContainer = styled.div`
	display: flex;
	width: 774px;
	border-radius: 6px;
	background-color: white;
	color: #4a5568;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
	border: 1px solid #cbd5e0;
	font-weight: 500;
	padding-top: 8px;
	padding-bottom: 8px;
	padding-right: 8px;
	padding-left: 8px;
`;

const Input = styled.input`
	width: 100%;
	margin-left: 8px;
	font-size: 15px;
	color: #2d3748;
	font-weight: 500;
	outline: none;
	margin-right: 8px;
	border: none;

	&::placeholder {
		font-size: 15px;
		color: #a0aec0;
	}
`;

const SubmitButton = styled.button`
	border: 1px solid #cbd5e0;
	background-color: white;
	padding-left: 8px;
	padding-right: 8px;
	padding-top: 8px;
	padding-bottom: 6px;
	border-radius: 6px;
	cursor: pointer;
`;

const SubmitIcon = styled(GoPaperAirplane)`
	font-size: 16px;
	color: #a0aec0;
`;

const TaskInput = ({
	newTaskTitle,
	setNewTaskTitle,
	newTaskDescription,
	setNewTaskDescription,
	addNewTask,
}) => (
	<InputContainer>
		<Input
			placeholder="제목을 입력해보세요"
			value={newTaskTitle}
			onChange={(e) => setNewTaskTitle(e.target.value)}
			required
		/>
		<hr style={{ marginRight: "8px" }} />
		<Input
			placeholder="내용을 입력해보세요"
			value={newTaskDescription}
			onChange={(e) => setNewTaskDescription(e.target.value)}
			required
		/>
		<SubmitButton onClick={addNewTask}>
			<SubmitIcon />
		</SubmitButton>
	</InputContainer>
);

export default TaskInput;
