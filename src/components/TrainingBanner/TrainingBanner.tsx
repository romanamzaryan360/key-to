import classes from "./TrainingBanner.module.scss";
import bannerPattern from "../../assets/svg/banner-pattern.svg";

const TrainingBanner = () => {
    return (
        <div id={classes.banner}>
            <div id={classes.background}>
                <img src={bannerPattern} alt="Banner background" />
                <img src={bannerPattern} alt="Banner background" />
                <img src={bannerPattern} alt="Banner background" />
                <img src={bannerPattern} alt="Banner background" />
            </div>
            <div id={classes.content} className="container">
                <h2>Training at KeyToSchool</h2>
                <p>
                    vIf you want to improve the skill of self-realization, we offer <br />
                    training courses using the "Key To" method, as well as personal <br />
                    consultations and analyses from our experts.
                </p>
            </div>
        </div>
    );
};

export default TrainingBanner;
