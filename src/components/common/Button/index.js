import styled from "styled-components";
import { StyledButton } from "./styles";

const StyledLink = styled.a`
	text-decoration: none;
`;

const Button = ({
	href,
	target,
	bgColor,
	textColor,
	py,
	px,
	rounded,
	fontSize,
	transition,
	hoverBgColor,
	children,
}) => (
	<StyledLink href={href} target={target}>
		<StyledButton
			bgColor={bgColor}
			textColor={textColor}
			py={py}
			px={px}
			rounded={rounded}
			fontSize={fontSize}
			transition={transition}
			hoverBgColor={hoverBgColor}
		>
			{children}
		</StyledButton>
	</StyledLink>
);

export default Button;
