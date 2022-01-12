import {
    Date,
    Description,
    Title,
    TimelineContainer,
    TimelineWrapper,
    TimelineList,
    TimeListItem,
    Subtitle,
    Details,
    Detail,
    SectionTitle,
} from "./styles";
import { experience } from "../../constants";

const Timeline = () => {
    return (
        <div>
            <SectionTitle>Experience</SectionTitle>
            <TimelineContainer>
                <TimelineWrapper className="timeline">
                    <TimelineList>
                        {experience.map((experienceItem, index) => {
                            return (
                                <TimeListItem key={index}>
                                    <Date>{`${experienceItem.from} - ${experienceItem.to}`}</Date>
                                    <Title>{`${experienceItem.jobTitle} | ${experienceItem.company}`}</Title>
                                    <Subtitle>{`${experienceItem.location} - ${experienceItem.typeOfEmployee}`}</Subtitle>
                                    <Description>{experienceItem.description}</Description>
                                    <Details>
                                        {experienceItem.details.map((detail, index) => {
                                            return (
                                                <Detail key={index}>
                                                    <div>○</div>
                                                    <div
                                                        dangerouslySetInnerHTML={{ __html: detail }}
                                                    ></div>
                                                </Detail>
                                            );
                                        })}
                                    </Details>
                                </TimeListItem>
                            );
                        })}
                    </TimelineList>
                </TimelineWrapper>
            </TimelineContainer>
        </div>
    );
};

export default Timeline;
