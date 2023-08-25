import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => props.bgColor || "#DC2726"};
	font-size: 12px;
	cursor: pointer;
	color: ${(props) => props.textColor || "white"};
	padding: ${(props) => props.py || "0.5rem"} ${(props) => props.px || "0.75rem"};
	border-radius: ${(props) => props.rounded || "0.75rem"};
	transition: ${(props) => props.transition || "all 0.2s"};
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
`;
