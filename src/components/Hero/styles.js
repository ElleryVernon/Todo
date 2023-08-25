import styled from "styled-components";

export const HeroContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const HeroTitle = styled.h1`
	margin-top: 5rem;
	font-size: 3.75rem;
	font-weight: 800;
	color: #333;
	text-align: center;
	line-height: 1.2;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	margin-bottom: 4px;

	span {
		display: block;

		&:first-child {
			background-image: linear-gradient(to right, #f50101 0%, #ff7f00 100%);
			color: transparent;
			background-clip: text;
			-webkit-background-clip: text; /* 크로스 브라우저 지원을 위해 */
			display: inline-block;
			margin-bottom: 0.75rem;
		}
	}
`;

export const HeroDescription = styled.p`
	margin-top: 0px;
	font-size: 1.15rem;
	font-weight: 600;
	color: #999;
	text-align: center;
	max-width: 30rem;
	word-break: break-word;
`;
