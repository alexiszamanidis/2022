import Timeline from "../Timeline";
import HeroSection from "../HeroSection";
// import { passionateAbout } from "../../constants";

const Personal = () => {
    return (
        <div>
            <HeroSection />
            <Timeline />
            {/* {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))} */}
        </div>
    );
};

export default Personal;
