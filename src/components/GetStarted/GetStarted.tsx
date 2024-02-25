import classes from "./GetStarted.module.scss";
import imageDark from "../../assets/svg/get-started-dark.svg";
import imageLight from "../../assets/svg/get-started-light.svg";
import { useAppSelector } from "../../store";
import { DARK } from "../../constants/modes";
import classNames from "classnames";
import Content from "./Content";

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
                    determine your destiny, as well as find a partner for an ideal relationship.
                </p>
            </div>
            <Content id={classes.smallContent} classList={mode === DARK ? classes.dark : ""} />
        </div>
    );
};

export default GetStarted;
