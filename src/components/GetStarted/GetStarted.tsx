import classes from "./GetStarted.module.scss";
import imageDark from "../../assets/svg/get-started-dark.svg";
import imageLight from "../../assets/svg/get-started-light.svg";
import { useAppSelector } from "../../store";
import { DARK } from "../../constants/modes";
import classNames from "classnames";
import Button from "../Button";

const GetStarted = () => {
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div id={classes.getStarted} className="container">
            <div id={classes.image}>
                <img src={mode === DARK ? imageDark : imageLight} alt="Get started" />
            </div>
            <div id={classes.content} className={classNames({ [classes.dark]: mode === DARK })}>
                <h3>What we do</h3>
                <h1>KeyTo Method, Change your life</h1>
                <p>
                    Project "Key To" is your key to fully understand yourself. Our method allows you to accurately
                    determine your destiny, as well as find a partner for an ideal relationship. <br /> "Key To" is a
                    unique self-discovery tool that is based on researching your date of birth. We know that the day,
                    month and year you came into this world, carries the hidden code of your destiny. Your date of birth
                    is a unique key that unlocks your true self.
                    <br /> Register and enter your date of birth to receive in depth personality analysis and unique
                    tips for your development. Discover areas where you can succeed in and learn about potential
                    obstacles on your way.
                </p>
                <Button type="dark">Get Started</Button>
            </div>
        </div>
    );
};

export default GetStarted;
