import Course from "../Course/Course";
import classes from "./Courses.module.scss";
import MarathonSVG from "../SVGs/MarathonSVG";
import DcsSVG from "../SVGs/DcsSVG";
import ConsultationSVG from "../SVGs/ConsultationSVG";

const Courses = () => {
    return (
        <div id={classes.courses} className="container">
            <Course
                title="Marathon KEY TO"
                SVG={MarathonSVG}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#marathon"
                sizes={{
                    desktop: { width: 85, height: 85.47 },
                    tablet: { width: 50, height: 50 },
                    mobile: { width: 103, height: 99 },
                }}
            />

            <Course
                title="DCS COURSE"
                SVG={DcsSVG}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#dcs"
                small
                sizes={{
                    desktop: { width: 68.2, height: 99.5 },
                    tablet: { width: 41, height: 58 },
                    mobile: { width: 68, height: 101 },
                }}
            />

            <Course
                title="Personal Consultation"
                SVG={ConsultationSVG}
                description="An interactive course in the form of a marathon will upgrade your talents and abilities! You will understand what innate talents and destiny you have."
                url="#consultation"
                sizes={{
                    desktop: { width: 95.53, height: 95 },
                    tablet: { width: 50, height: 50 },
                    mobile: { width: 95, height: 94 },
                }}
            />
        </div>
    );
};

export default Courses;
