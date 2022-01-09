import SocialIcons from "../SocialIcons";
import { fullName, summary, cv } from "../../constants";

const Header = () => {
    return (
        <div>
            <div>{fullName}</div>
            <div>{summary}</div>
            <div>
                <div>{cv.icon}</div>
                <div>{cv.link}</div>
            </div>
            <SocialIcons />
        </div>
    );
};

export default Header;
