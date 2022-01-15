import { HobbiesContainer, Hobby, HobbyIcon, HobbyTitle, SectionTitle, Wrapper } from "./styles";
import { hobbies } from "../../constants";

const Hobbies = () => {
    return (
        <Wrapper>
            <SectionTitle>Hobbies</SectionTitle>
            <HobbiesContainer>
                {hobbies.map((hobby, index) => (
                    <Hobby key={index}>
                        <HobbyIcon>{hobby.icon}</HobbyIcon>
                        <HobbyTitle>{hobby.title}</HobbyTitle>
                    </Hobby>
                ))}
            </HobbiesContainer>
        </Wrapper>
    );
};

export default Hobbies;
