import classes from "./TrainingBanner.module.scss";
import bannerPattern from "../../assets/svg/banner-pattern.svg";
import bannerPattern2 from "../../assets/svg/banner-pattern-2.svg";
import bannerPattern3 from "../../assets/svg/banner-pattern-3.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { TABLET_MIN_SIZE } from "../../constants/sizes";

const TrainingBanner = () => {
    const { width } = useWindowDimensions();

    return (
        <div id={classes.banner}>
            <div id={classes.background}>
                <div>
                    <img className={classes.hidable} src={bannerPattern} alt="Banner background" />
                    <img className={classes.hidable} src={bannerPattern} alt="Banner background" />
                    <img id={classes.onlyPattern} src={bannerPattern3} alt="Banner background" />
                </div>
                <img className={classes.hidable} src={bannerPattern2} alt="Banner background" />
            </div>
            <div id={classes.content} className="container">
                <h2>Training at KeyToSchool</h2>
                {width >= TABLET_MIN_SIZE ? (
                    <p>
                        If you want to improve the skill of self-realization, we offer <br />
                        training courses using the "Key To" method, as well as personal <br />
                        consultations and analyses from our experts.
                    </p>
                ) : (
                    <p>
                        If you want to improve the skill of self-realization, we offer training courses using the "Key
                        To" method, as well as personal consultations and analyses from our experts.
                    </p>
                )}
            </div>
        </div>
    );
};

export default TrainingBanner;
