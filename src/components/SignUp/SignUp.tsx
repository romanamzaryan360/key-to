import classes from "./SignUp.module.scss";
import cardsDark from "../../assets/svg/cards-dark.svg";
import cardsLight from "../../assets/svg/cards-light.svg";
import { useAppSelector } from "../../store";
import { DARK } from "../../constants/modes";
import FormInput from "../FormInput";
import FormCheckbox from "../FormCheckbox";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const SignUp = () => {
    const mode = useAppSelector((state) => state.app.mode);
    const { width } = useWindowDimensions();

    return (
        <div id={classes.signUp}>
            <div id={classes.container} className="container">
                <form>
                    <h3>Lets start</h3>
                    <h2>SIGN UP</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Dictum lobortis sit commodo ultricies vel euismod
                        tortor.
                    </p>

                    <div id={classes.formGroup}>
                        <FormInput type="email" id="email" help="Enter your valid email" placeholder="Email address" />
                        <FormInput
                            type="password"
                            id="password"
                            help="Create a strong password"
                            placeholder="Password"
                        />
                        <FormInput
                            type="password"
                            id="password_confirmation"
                            help={width > 900 ? "Confirm your password" : "Type your new password here"}
                            placeholder="Confirm password"
                        />
                    </div>

                    <div id={classes.agreeWithTerms}>
                        <div className={classes.content}>
                            <h4>I am not a robot</h4>
                            <a href="#continue">
                                Click here tocontinue.
                                <br />
                                Terms of use
                            </a>
                        </div>
                        <FormCheckbox id="terms" />
                    </div>

                    <button id={classes.submit} type="submit">
                        Sign up
                    </button>
                    <a id={classes.signIn} href="#sign-in">
                        SIGN IN
                    </a>
                </form>
                <img src={mode === DARK ? cardsDark : cardsLight} alt="Cards" />
            </div>
        </div>
    );
};

export default SignUp;
