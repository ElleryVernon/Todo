import styled from "styled-components";
import { GoPaperAirplane } from "react-icons/go";

const InputContainer = styled.div`
	display: flex;
	width: 774px;
	border-radius: 6px;
	background-color: white;
	color: #4a5568;
	box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
	border: 1px solid #cbd5e0; /* border-neutral-400 */
	font-weight: 500; /* font-medium */
	padding-top: 8px; /* py-2 */
	padding-bottom: 8px;
	padding-right: 8px; /* pr-2 */
	padding-left: 8px;
`;

const Input = styled.input`
	width: 100%;
	margin-left: 8px; /* ml-2 */
	font-size: 15px; /* text-[15px] */
	color: #2d3748; /* text-neutral-900 */
	font-weight: 500; /* font-medium */
	outline: none;
	margin-right: 8px; /* mr-2 */
	border: none;

	&::placeholder {
		font-size: 15px; /* placeholder:text-[15px] */
		color: #a0aec0; /* placeholder */
	}
`;

const SubmitButton = styled.button`
	border: 1px solid #cbd5e0; /* border-neutral-400 */
	background-color: white;
	padding-left: 8px;
	padding-right: 8px; /* px-2 */
	padding-top: 8px;
	padding-bottom: 6px;
	border-radius: 6px; /* rounded-lg */
	cursor: pointer;
`;

const SubmitIcon = styled(GoPaperAirplane)`
	font-size: 16px; /* size 16 */
	color: #a0aec0; /* text-neutral-400 */
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
