import classNames from "classnames";
import { useAppSelector } from "../../store";
import classes from "./Footer.module.scss";
import { DARK } from "../../constants/modes";
import logoSmallDark from "../../assets/svg/logo-small-dark.svg";
import logoSmallLight from "../../assets/svg/logo-small-light.svg";
import Socials from "../Socials";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { TABLET_MAX_SIZE } from "../../constants/sizes";
import { FormEvent } from "react";

const Footer = () => {
    const mode = useAppSelector((state) => state.app.mode);
    const { width } = useWindowDimensions();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div id={classes.footer} className={classNames("container", { [classes.dark]: mode === DARK })}>
            <div id={classes.wrapper}>
                <div id={classes.socials}>
                    <img src={mode === DARK ? logoSmallDark : logoSmallLight} alt="Small Logo" />
                    <p>
                        The unique system of KeyTo is meant to analyze a person's data and find better compatibility
                        between people.
                    </p>
                    {width > TABLET_MAX_SIZE ? <Socials classList={classes.socialsList} /> : null}
                </div>
                <div id={classes.menu}>
                    <a href="#about">About Us</a>
                    <a href="#review">Take a review</a>
                    <a href="#privacy">Privacy Policy</a>
                    <a href="#terms">Terms and Conditions</a>
                    <a href="#courses">Courses and trainings</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div id={classes.subscribeWrapper}>
                    <form id={classes.subscribe} onSubmit={submitHandler}>
                        <label htmlFor="subscribeEmail">SUBSCRIBE</label>
                        <input type="email" name="email" id="subscribeEmail" placeholder="Email address" required />
                        <button>Subscribe now</button>
                    </form>
                </div>
                {width <= TABLET_MAX_SIZE ? <Socials classList={classes.socialsList} /> : null}
            </div>
            <p id={classes.copyright}>© Copyright 2022, All Rights Reserved by KEYTO</p>
        </div>
    );
};

export default Footer;
