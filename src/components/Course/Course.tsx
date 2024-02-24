import classNames from "classnames";
import { DARK } from "../../constants/modes";
import { useAppSelector } from "../../store";
import classes from "./Course.module.scss";

type CoursePropsType = {
    darkImage: string;
    lightImage: string;
    title: string;
    description: string;
    url: string;
    small?: boolean;
};

const Course = ({ darkImage, lightImage, title, description, url, small }: CoursePropsType) => {
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div id={classes.course} className={classNames({ [classes.small]: small, [classes.dark]: mode === DARK })}>
            <img src={mode === DARK ? darkImage : lightImage} alt="Course" />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url}>Get your analysis</a>
        </div>
    );
};

export default Course;
