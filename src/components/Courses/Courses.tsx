import Course from "../Course/Course";
import classes from "./Courses.module.scss";
import marathonDark from "../../assets/svg/marathon-dark.svg";
import marathonLight from "../../assets/svg/marathon-light.svg";
import dcsDark from "../../assets/svg/dcs-dark.svg";
import dcsLight from "../../assets/svg/dcs-light.svg";
import consultationDark from "../../assets/svg/consultation-dark.svg";
import consultationLight from "../../assets/svg/consultation-light.svg";

const Courses = () => {
    return (
        <div id={classes.courses} className="container">
            <Course
                title="Marathon KEY TO"
                darkImage={marathonDark}
                lightImage={marathonLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#marathon"
            />

            <Course
                title="DCS COURSE"
                darkImage={dcsDark}
                lightImage={dcsLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#dcs"
                small
            />

            <Course
                title="Personal Consultation"
                darkImage={consultationDark}
                lightImage={consultationLight}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#consultation"
            />
        </div>
    );
};

export default Courses;
