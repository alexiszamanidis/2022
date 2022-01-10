import SocialIcons from "../SocialIcons";
import { fullName, summary } from "../../constants";

const Header = () => {
    return (
        <div>
            <div>{fullName}</div>
            <div>{summary}</div>
            <SocialIcons />
        </div>
    );
};

export default Header;
