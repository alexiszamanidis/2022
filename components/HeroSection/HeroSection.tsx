import { fullName, summary, cv } from "../../constants";
import { Wrapper, Title, Summary, Button, CvIcon } from "./styles";

const HeroSection = () => {
    return (
        <Wrapper>
            <Title>Hi, my name is {fullName}</Title>
            <Summary>{summary}</Summary>
            <Button target="_blank" rel="noopener" href={cv.link}>
                <CvIcon>{cv.icon}</CvIcon>
                <div>Resume</div>
            </Button>
        </Wrapper>
    );
};

export default HeroSection;
