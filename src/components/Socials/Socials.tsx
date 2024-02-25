import { useAppSelector } from "../../store";
import classes from "./Socials.module.scss";
import facebookDark from "../../assets/svg/facebook-dark.svg";
import facebookLight from "../../assets/svg/facebook-light.svg";
import instagramDark from "../../assets/svg/instagram-dark.svg";
import instagramLight from "../../assets/svg/instagram-light.svg";
import youtubeDark from "../../assets/svg/youtube-dark.svg";
import youtubeLight from "../../assets/svg/youtube-light.svg";
import tiktokDark from "../../assets/svg/tiktok-dark.svg";
import tiktokLight from "../../assets/svg/tiktok-light.svg";
import { DARK } from "../../constants/modes";

type SocialsPropsType = {
    classList?: string;
};

const Socials = ({ classList }: SocialsPropsType) => {
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div id={classes.socials} className={classList}>
            <img src={mode === DARK ? facebookDark : facebookLight} alt="Facebook" />
            <img src={mode === DARK ? instagramDark : instagramLight} alt="Instagram" />
            <img src={mode === DARK ? youtubeDark : youtubeLight} alt="Youtube" />
            <img src={mode === DARK ? tiktokDark : tiktokLight} alt="Tiktok" />
        </div>
    );
};

export default Socials;
