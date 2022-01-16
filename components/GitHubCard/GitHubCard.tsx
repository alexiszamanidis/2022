import { GitHubRepository } from "../../types";
import Button from "../Button";
import { Description, Detail, Details, Language, Name, Wrapper } from "./styles";
import { AiFillStar, AiOutlineFork } from "react-icons/ai";

const GitHubCard = ({
    name,
    description,
    language,
    stargazers_count,
    forks_count,
    html_url,
}: GitHubRepository) => {
    return (
        <Wrapper>
            <div>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <Details>
                    <Language>{`Language: ${language}`}</Language>
                    <Detail>
                        <AiFillStar />
                        {stargazers_count}
                    </Detail>
                    <Detail>
                        <AiOutlineFork />
                        {forks_count}
                    </Detail>
                </Details>
            </div>
            <Button href={html_url}>View on GitHub</Button>
        </Wrapper>
    );
};

export default GitHubCard;
