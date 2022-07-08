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
    LinkIcon,
} from "./styles";
import { experience } from "../../constants";

const Timeline = () => {
    const onLinkClick = (link: string) => () => {
        window.open(link);
    };

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
                                    <Title>
                                        <>
                                            {`${experienceItem.jobTitle} | ${experienceItem.company}`}
                                        </>
                                        {experienceItem.link && (
                                            <LinkIcon onClick={onLinkClick(experienceItem.link)} />
                                        )}
                                    </Title>
                                    <Subtitle>{`${experienceItem.location} - ${experienceItem.typeOfEmployee}`}</Subtitle>
                                    <Description>{experienceItem.description}</Description>
                                    <Details>
                                        {experienceItem.details.map((detail, index) => {
                                            return (
                                                <Detail key={index}>
                                                    <div>○</div>
                                                    <div>{detail}</div>
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
