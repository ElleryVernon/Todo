import { Header, Logo } from "./styles";
import Button from "../common/Button";

const MainHeader = () => (
	<Header>
		<Logo src="/logo.png" alt="logo" />
		<Button
			href="https://hanghae99.spartacodingclub.kr/v2/fullTime?utm_source=google&utm_medium=bs&utm_campaign=hh&utm_content=brand&utm_term=항해99&gcl_keyword=항해99&gcl_network=g&gclid=Cj0KCQjwrMKmBhCJARIsAHuEAPSYYkDExo6A2TV48AqzxZ84JPMg-ZbxKqjiIE3xKsLEKNJ4x3S9nOQaAsDcEALw_wcB"
			target={"_blank"}
		>
			항해99란?
		</Button>
	</Header>
);

export default MainHeader;
