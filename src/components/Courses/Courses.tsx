import Course from "../Course/Course";
import classes from "./Courses.module.scss";
import marathonDark from "../../assets/svg/marathon-dark.svg";
import marathonLight from "../../assets/svg/marathon-light.svg";
import marathonSmall from "../../assets/svg/marathon-small.svg";
import dcsDark from "../../assets/svg/dcs-dark.svg";
import dcsLight from "../../assets/svg/dcs-light.svg";
import dcsSmall from "../../assets/svg/dcs-small.svg";
import consultationDark from "../../assets/svg/consultation-dark.svg";
import consultationLight from "../../assets/svg/consultation-light.svg";
import consultationSmall from "../../assets/svg/consultation-small.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Courses = () => {
    const { width } = useWindowDimensions();

    return (
        <div id={classes.courses} className="container">
            <Course
                title="Marathon KEY TO"
                darkImage={width <= 900 ? marathonSmall : marathonDark}
                lightImage={width <= 900 ? marathonSmall : marathonLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#marathon"
            />

            <Course
                title="DCS COURSE"
                darkImage={width <= 900 ? dcsSmall : dcsDark}
                lightImage={width <= 900 ? dcsSmall : dcsLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#dcs"
                small
            />

            <Course
                title="Personal Consultation"
                darkImage={width <= 900 ? consultationSmall : consultationDark}
                lightImage={width <= 900 ? consultationSmall : consultationLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#consultation"
            />
        </div>
    );
};

export default Courses;
