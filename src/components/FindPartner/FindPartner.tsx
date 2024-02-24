import Button from "../Button";
import classes from "./FindPartner.module.scss";
import flowerTop from "../../assets/svg/flower-top.svg";
import flowerBottom from "../../assets/svg/flower-bottom.svg";

const FindPartner = () => {
    return (
        <div id={classes.wrapper}>
            <div id={classes.findPartner} className="container">
                <div id={classes.content}>
                    <h2>Find your ideal partner</h2>
                    <p>
                        "Key To" is not only the key for understanding yourself, it is also an innovative dating
                        service. Look for the ideal partner for love, friendship or development of a joint venture,
                        based on the analysis of your date of birth. Browse profiles, like them, and start conversations
                        that go beyond superficial messaging.
                    </p>
                    <Button>Get Started</Button>
                </div>
                <div id={classes.partners}>
                    <img id={classes.flowerTop} src={flowerTop} alt="Flower top" />
                    <img id={classes.flowerBottom} src={flowerBottom} alt="Flower bottom" />
                    <h3>TRUE LOVE</h3>
                    <h3>BUSINESS PARTNERS</h3>
                    <h3>STRONG FRIENDSHIP</h3>
                </div>
            </div>
        </div>
    );
};

export default FindPartner;
