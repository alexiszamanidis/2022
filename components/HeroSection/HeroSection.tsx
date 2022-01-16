import { fullName, summary, cv } from "../../constants";
import Button from "../Button";
import { Wrapper, Title, Summary, CvIcon } from "./styles";

const HeroSection = () => {
    return (
        <Wrapper>
            <Title>Hi, my name is {fullName}</Title>
            <Summary>{summary}</Summary>
            <Button href={cv.link}>
                <CvIcon>{cv.icon}</CvIcon>
                <div>Resume</div>
            </Button>
        </Wrapper>
    );
};

export default HeroSection;
