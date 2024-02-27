import classNames from "classnames";
import classes from "./Course.module.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppSelector } from "../../store";
import { selectIsDark } from "../../store/app/appSlice";
import type { CoursePropsType } from "./types";
import { useEffect, useState } from "react";

const Course = ({ SVG, title, description, url, sizes, small }: CoursePropsType) => {
    const [isHover, setIsHover] = useState(false);
    const isDark = useAppSelector(selectIsDark);
    const { device } = useWindowDimensions();

    useEffect(function () {}, []);

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={classNames(classes.course, { [classes.small]: small, [classes.dark]: isDark })}
        >
            <SVG
                {...(device === "desktop" && !isHover ? { fill: "none", stroke: isDark ? "#EADDFF" : "#21005D" } : null)}
                {...(device !== "unsafe" ? sizes[device] : {})}
            />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url}>Get your analysis</a>
        </div>
    );
};

export default Course;
