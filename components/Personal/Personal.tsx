import { FadeIn } from "../Styles";
import Timeline from "../Timeline";
import HeroSection from "../HeroSection";

// import { passionateAbout } from "../../constants";

const Personal = () => {
    return (
        <FadeIn>
            <HeroSection />
            <Timeline />
            {/* {passionateAbout.map((passionAboutItem, index) => (
                <div key={index}>{passionAboutItem}</div>
            ))} */}
        </FadeIn>
    );
};

export default Personal;
